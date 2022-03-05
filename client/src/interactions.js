var PostInteraction = (event, widgetName) => {
  var interaction = {
    element: event.target.tagName + ' ' + event.target.className,
    widget: widgetName,
    time: Date.now().toString()
  }

  axios.post('/interactions', interaction)
  .then( (result) => {
    console.log('interaction posted!');
  })
  .catch((error) => {
    console.log('Error posting interaction');
  });
}

export default PostInteraction;