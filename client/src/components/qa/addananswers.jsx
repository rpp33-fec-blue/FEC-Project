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

  var offForm () = () => {
    document.getElementbyId('overlayAddAnswer').style.display = 'none'
  }

  var productName = useSelector((state) => state.productInfo.name);

  return (
    <form id="overlayAddAnswer" onSubmit={handleSubmit}>
      <h3>Add Your Question</h3>
      <h4>About the {productName}</h4>
        <label for="question">Your question:*</label>
        <textarea name="question" cols="5" rows="10"></textarea>

        <label for="nickname">What is your nickname?*</label>
        <input name="nickname" value="Example: jack543!" type="text" id="nickname" />
        <div> For privacy reasons, do not use your full name or email address </div>

        <label for="email"> Your email *
        <input name="email" value="Example: jack@email.com" type="text" id="email">
        <div> For authentication reasons, you will not be emailed </div>

        <input type="submit" name="submit" value="submit">
    </form>
  );
}