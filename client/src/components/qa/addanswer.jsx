import {connect} from 'react-redux';
import addAnswer from '../../action-creators/addAnswer.js';
import axios from 'axios';
import FormData from 'form-data';
import Image from './image.jsx';
import React from 'react';

class AddAnswerComp extends React.Component {
  constructor (props) {
    super(props);
    //props what i have in props
    //props.question
    //props.questionId
    //props.productId
    //props.productName
    this.state = {
      nickname: '',
      answer: '',
      email: '',
      submitMessage: '',
      imagesUrl: [],
      images: [],
      awsUrl: [],
    }
  }

  async handleChange (e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    await this.setState({
      [name]: value
    })
  }

  async handleSubmit (e) {
    e.preventDefault();
    var answer = this.state.answer;
    var nickname = this.state.nickname;
    var email = this.state.email;
    var questionId = this.props.questionId
    var config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    // ================ S3 start =======================
    for (var i = 0; i < this.state.images.length; i++) {
      // get secure url from the server to post the image
      var photoUrl = await axios.get('/s3Url', config)
      .then((res) => {
        return res.data;
      })

      var image = this.state.images[i][0];
      await axios.put(photoUrl, image, config)
        .then((res) => {
          var imageUrlAws = photoUrl.split('?')[0];
          this.setState((prevState) => {
            return {
              awsUrl: [...prevState.awsUrl, imageUrlAws]
            }
          })
        })
        .catch((err) => {
          console.log('err putted in aws', err);
        });
    }
    // ================ S3 end =======================
    // send another post request to store new answers and photo
    var newAnswer = {
      "body": answer,
      "name": nickname,
      "email": email,
      "photos": this.state.awsUrl
    };

    axios.post( `/qa/questions/${questionId}/answers`, newAnswer)
      .then(() => {
        this.setState({
          submitMessage: 'Complete'
        })
      })
      .catch((err) => {
        console.log('err in post answers', err)
      });
  }

  offForm () {
    offOverlay(`overlay-addAnswer-${this.props.questionId}`);
    return false;
  }

  hideUploadImageButton () {
    document.getElementById(`overlay-addAnswer-${this.props.questionId}`).style.display = "none";
  }

  showUploadImageButton () {
    document.getElementById(`overlay-addAnswer-${this.props.questionId}`).style.display = "block";
  }

  handleAddImage (e) {
    var files = e.target.files; //array
    if (this.state.imagesUrl.length === 5) {
      this.hideUploadImageButton();
    } else {
      this.showUploadImageButton();
    }
    this.setState((prevState) => {
      var urls = [];
      for (var i = 0; i < files.length; i++) {
        urls.push(URL.createObjectURL(files[i]));
      };
      return {
        imagesUrl: [...prevState.imagesUrl, urls],
        images: [...prevState.images, files],
      };
    })
  }

  render () {
    var thumbnails = this.state.imagesUrl.map((url, i) => {
      return <Image url={url} key={i} />
    })

    return (
      <form id={`overlay-addAnswer-${this.props.questionId}`}
        className="overlay-bg"
        onSubmit={this.handleSubmit.bind(this)}>
        <div className="overlay-content">
          <a href="#/"
            className="closebtn"
            onClick={this.offForm.bind(this)}
          >&times;</a>
          <div>
            <h3>SUBMIT YOUR ANSWER</h3>
            <h4>{this.props.productName} : {this.props.question.question_body}</h4>
          </div>

          <div>
            <label htmlFor="answer">Your Answer:*
              <textarea
                onChange={this.handleChange.bind(this)}
                name="answer"
                cols="5" rows="10"
                required
              ></textarea>
            </label>
          </div>

          <div>
            <label>
              What is your nickname?*
              <br />
              <input
                onChange={this.handleChange.bind(this)}
                name="nickname"
                placeholder="Example: jack543!"
                type="text"
                id={`nicknameForQuestionId${this.props.questionId}`}
                required
              />
            </label>
            <br />
            <div className="warning"> For privacy reasons, do not use your full name or email address </div>
          </div>

          <br />
          <div>
            <label htmlFor="email"> Your email *</label>
            <br />
            <input
              onChange={this.handleChange.bind(this)}
              name="email"
              placeholder="Example: jack@email.com"
              type="email"
              id={`emailForQuestionId${this.props.questionId}`}
              required
              size="64"/>
            <br />
            <div className="warning"> For authentication reasons, you will not be emailed </div>
          </div>
          <br />
          <label htmlFor={`answerphotoForQuestionId${this.props.questionId}`}> Add photo here:</label>
          <br />
            {thumbnails}
          <br />
          <input
            type="file"
            id={`answerphotoForQuestionId${this.props.questionId}`}
            name="answerphoto"
            accept="image/png, image/jpeg"
            onChange={this.handleAddImage.bind(this)}
            multiple/>
          <br />

          <input type="submit" name="submit" value="SUBMIT" />

          <br />

          <h1 id="submitMessage">{this.state.submitMessage}</h1>

        </div>
      </form>
    );
  }
}

var mapStateToProps = (state = initialState) => {
  return {
    productId: state.productId,
    productName: state.productInfo.name
  }
};

var mapDispatchToProps = (dispatch) => {
  return {

  }
};

var AddAnswer = connect(mapStateToProps,mapDispatchToProps)(AddAnswerComp);

export default AddAnswer;