const StyleSelector = ( { styles, selectedStyleIndex, updateSelectedStyle } ) => {

  const selectedStyleName = styles.results[selectedStyleIndex].name;

  var index = 0;

  // TO DO - 4 thumbnails per row
  // TO DO - add checkmark to selected style

  return (
    <div>
      <p>Selected style: {selectedStyleName}</p>
      {_.map(styles.results, (style) => index === selectedStyleIndex ?
      <img src={style.photos[index].thumbnail_url} className='style-thumbnail' id='selectedStyle' index={index} key={index++}></img> :
      <img src={style.photos[index].thumbnail_url} className='style-thumbnail' onClick={updateSelectedStyle} index={index} key={index++}></img>)}
   </div>
  );
};

export default StyleSelector;