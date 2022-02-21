import React from 'react';

const DefaultView = ( { styles, selectedStyleIndex, selectedImageIndex, updateSelectedImageIndex, updateDefaultView } ) => {

  const mainImageUrl = styles.results[selectedStyleIndex].photos[selectedImageIndex].url;
  const images = styles.results[selectedStyleIndex].photos;

  return (
    <div className='defaultView-component'>
      <img src={mainImageUrl}></img> {/* TO DO - On hover, cursor changes to magnifying glass; if clicked, should update defaultView */}

      {images.map((image, index) => index === selectedImageIndex ? // TO DO - image should be highlighted
        <img src={image.thumbnail_url} onClick={updateDefaultView} key={index++}></img> :
        <img src={image.thumbnail_url} onClick={updateSelectedImageIndex} value={index} key={index++}></img>
      )}

      {/* TO DO - limit to 7 thumbnails, and insert up and down arrows if more than 7 thumbnails */}

      {selectedImageIndex === 0 ?
        <button onClick={updateSelectedImageIndex} value='left' hidden>Left arrow</button> :
        <button onClick={updateSelectedImageIndex} value='left'>Left arrow</button>
      }
      {selectedImageIndex === styles.results.length - 1 ?
        <button onClick={updateSelectedImageIndex} value='right' hidden>Right arrow</button> :
        <button onClick={updateSelectedImageIndex} value='right'>Right arrow</button>
      }
    </div>
  );
};

export default DefaultView;