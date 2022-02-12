import {useSelector, useDispatch} from 'react-redux';

var AddAnAnswer = (props) => {

  var handleSubmit = (e) => {
    e.preventDefault();
    // validate email format
    // validate mandatory field
    // valid images
    // if not all valid >> show err message
    offForm();
    // Submit
      // call dispatch addAnswer( questionId, newAnswer )
  }

  var offForm = () => {
    offOverlay("overlay-addAnswer");
  }

  var productName = useSelector((state) => state.productInfo.name);

  return (
    <form id="overlay-addAnswer" className="overlay-bg" onSubmit={handleSubmit}>
      <div className="overlay-content">
        <div>
          <h3>Add Your Question</h3>
          <h4>About the {productName}</h4>
        </div>
        <div>
          <label htmlFor="question">Your question:*</label>
          <textarea name="question" cols="5" rows="10"></textarea>
        </div>

        <div>
          <label htmlFor="nickname">What is your nickname?*</label>
          <br />
          <input name="nickname" placeholder="Example: jack543!" type="text" id="nickname" />
          <br />
          <div> For privacy reasons, do not use your full name or email address </div>
        </div>
        <br />
        <div>
          <label htmlFor="email"> Your email *</label>
          <br />
          <input name="email" placeholder="Example: jack@email.com" type="text" id="email"/>
          <br />
          <div> For authentication reasons, you will not be emailed </div>
        </div>
        <br />
        <input type="submit" name="submit" value="submit" />

      </div>
    </form>
  );
}

export default AddAnAnswer;