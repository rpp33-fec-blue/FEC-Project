// import {useSelector, useDispatch} from 'react-redux';
// import {useEffect} from 'react';
import {connect} from 'react-redux';
import addQuestion from '../../action-creators/addQuestion.js';
import axios from 'axios';
import React from 'react';
class AddQuestionComp extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      submitMessage: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    var question = e.target.question.value;
    var nickname = e.target.nickname.value;
    var email = e.target.email.value;

    if (!question || !nickname || !email) {
      // Did not use this, but use html default set up.
      this.setState({
        submitMessage: 'Error: You must enter all the followings: question, nickname, email.'
      });
    } else {
      // console.log({question, nickname, email});
      this.setState({
        submitMessage: 'Complete sending questions'
      });
    }
    var newQuestion = {
      "body": question,
      "name": nickname,
      "email": email,
      "product_id": Number(this.props.productId)
    };

    axios.post( "/qa/questions", newQuestion);
    // addQuestion(newQuestion); - if got time tried to find out how to use this later.
  }

  offForm () {
    offOverlay("overlay-addQuestion");
    return false;
  }

  render () {
    return (
      <form id="overlay-addQuestion" className="overlay-bg" onSubmit={this.handleSubmit.bind(this)}>
        <div className="overlay-content">
          <a href="#/" className="closebtn" onClick={this.offForm.bind(this)}>&times;</a>
          <div>
            <h3>ADD YOUR QUESTION</h3>
            <h4>About the {this.props.productName}</h4>
          </div>
          <div>
            <label htmlFor="question">Your question:*</label>
            <textarea
              id="question"
              name="question"
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
    questions: state.questions,
    productName: state.productInfo.name
  }
};

var mapDispatchToProps = (dispatch) => {
  return {

  }
};

var AddQuestion = connect(mapStateToProps,mapDispatchToProps)(AddQuestionComp);

export default AddQuestion;