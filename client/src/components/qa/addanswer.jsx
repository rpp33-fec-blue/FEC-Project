import {connect} from 'react-redux';
import addAnswer from '../../action-creators/addAnswer.js';
import axios from 'axios';
import FormData from 'form-data';
import Image from './image.jsx';

class AddAnswerComp extends React.Component {
  constructor (props) {
    super(props);
    //props what i have in props
    //props.question
    //props.questionId
    //props.productId
    //props.productName
    this.state = {
      submitMessage: '',
      imagesUrl: []
    }
  }

  async handleSubmit (e) {
    e.preventDefault();
    var answer = e.target.answer.value;
    var nickname = e.target.nickname.value;
    var email = e.target.email.value;
    var questionId = this.props.questionId

    var photos = this.state.imagesUrl.map((url, i) => {
      console.log(url[0])
      return url[0];
    });

    // get secure url from the server to post the image
    await axios.get('/s3Url')
      .then((res) => {
        console.log('url s3 res data', res);
      })

    // post the image directly to the bucket

    // send another post request to store new answers and photo
    var newAnswer = {
      "body": answer,
      "name": nickname,
      "email": email,
      "photos": photos
    };
    console.log({newAnswer});
    axios.post( `http://localhost:8080/qa/questions/${questionId}/answers`, newAnswer);
    // addAnswer(newAnswer); // try later when got time
  }

  offForm () {
    offOverlay("overlay-addAnswer");
    return false;
  }

  hideUploadImageButton () {
    document.getElementById("answerphoto").style.display = "none";
  }

  showUploadImageButton () {
    document.getElementById("answerphoto").style.display = "block";
  }

  handleAddImage (e) {
    var files = e.target.files; //array
    console.log({files});
    console.log('file.type', files[0].type);

    if (this.state.imagesUrl.length === 5) {
      this.hideUploadImageButton();
    } else {
      this.showUploadImageButton();
    }

    this.setState((prevState) => {
      var noOfFiles = files.length;
      var urls = [];
      for (var i = 0; i < noOfFiles; i++) {
        urls.push(URL.createObjectURL(files[i]));
      };

      return {
        imagesUrl: [...prevState.imagesUrl, urls]
      };
    })
  }

  render () {
    var question_body = this.props.question_body;
    var productName = this.props.productName;
    var thumbnails = this.state.imagesUrl.map((url, i) => {
      return <Image url={url} key={i} />
    })

    return (
      <form id="overlay-addAnswer"
        className="overlay-bg"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div className="overlay-content">
          <a href="#/"
            className="closebtn"
            onClick={this.offForm.bind(this)}
          >&times;</a>
          <div>
            <h3>SUBMIT YOUR ANSWER</h3>
            <h4>{productName}:{question_body}</h4>
          </div>

          <div>
            <label htmlFor="answer">Your Answer:*</label>
            <textarea
              name="answer"
              cols="5" rows="10"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="nickname">What is your nickname?*</label>
            <br />
            <input
              name="nickname"
              placeholder="Example: jack543!"
              type="text"
              id="nickname"
              required
            />
            <br />
            <div className="warning"> For privacy reasons, do not use your full name or email address </div>
          </div>

          <br />
          <div>
            <label htmlFor="email"> Your email *</label>
            <br />
            <input
              name="email"
              placeholder="Example: jack@email.com"
              type="email"
              id="email"
              required
              size="64"
            />
            <br />
            <div className="warning"> For authentication reasons, you will not be emailed </div>
          </div>

          <br />
          {thumbnails}
          <input
            type="file"
            id="answerphoto"
            name="answerphoto"
            accept="image/png, image/jpeg"
            onChange={this.handleAddImage.bind(this)}
            multiple
          />

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