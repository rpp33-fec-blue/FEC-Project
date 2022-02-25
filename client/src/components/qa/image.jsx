var Image = (props) => {
  var url = props.url;
  
  return (
    <img
      className="image-thumbnail"
      src={url}
      alt="uploaded photo for answer"
      height="100"
    />
  );
}

export default Image;