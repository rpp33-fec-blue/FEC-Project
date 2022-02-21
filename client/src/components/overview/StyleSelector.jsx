import React from 'react';

const StyleSelector = ( { styles, selectedStyleIndex, updateSelectedStyle } ) => {

  const selectedStyleName = styles.results[selectedStyleIndex].name;

  var index = 0;

  // TO DO - 4 thumbnails per row
  // TO DO - add checkmark to selected style

  return (
    <div className='styleSelector-component'>
      <p>Selected style: {selectedStyleName}</p>
      {styles.results.map((style, index) =>  index === selectedStyleIndex ?
        <img src={style.photos[index].thumbnail_url} className='style-thumbnail' id='selectedStyle' key={index}></img> :
        <img src={style.photos[index].thumbnail_url} className='style-thumbnail' onClick={updateSelectedStyle} index={index} key={index}></img>
      )}
   </div>
  );
};

export default StyleSelector;