import GalleryThumbnail from './GalleryThumbnail.jsx';

const DefaultView = ( { styles, selectedStyleId, selectedImageIndex, updateSelectedImageIndex, updateDefaultView } ) => {


  // Props: styles, selectedStyleId, selectedImageIndex, updateSelectedImageIndex, updateDefaultView

  return (
    <div>
      <img></img> {/* TO DO - insert selected image (if clicked, should update defaultView)
                            - on hover, cursor changes to magnifying glass
                  */}
      {/* TO DO - insert gallery thumbnails for other images (<= 7)
                - selectedImage thumbnail should be highlighted (clicking on it has no effect)
      */}
      {/* TO DO - insert up and down arrows if more than 7 thumbnails */}
      <GalleryThumbnail
        styles={props.styles}
        selectedStyleId={props.selectedStyleId}
        selectedImageIndex={props.selectedImageIndex}
        updateSelectedImageIndex={props.updateSelectedImageIndex}
      />
      <button onClick={updateSelectedImageIndex} value='left'>Left arrow</button> {/* TO DO - do not display left arrow if all the way to the left */}
      <button onClick={updateSelectedImageIndex} value='right'>Right arrow</button> {/* TO DO - do not display right arrow if all the way to the right */}
    </div>
  );
};

export default DefaultView;








/*

const DefaultView = ( { photos, selectedImageIndex, updateSelectedImageIndex } ) => {

  const imagesNotSelected = [];
  for (var index = 0; index < photos.length; index++) {
    if (index !== selectedImageIndex) {
      imagesNotSelected.push([index, photos[index]]);
    }
  }

  return (
    <div>
      <img src={photos[selectedImageIndex].url}></img>
      { imagesNotSelected.map( ( subArray ) => <img src={subArray[1].url} index={subArray[0]}></img> onClick={updateSelectedImageIndex} ); }
      <button onClick={updateSelectedImageIndex} value='left'>Left arrow</button>
      <button onClick={updateSelectedImageIndex} value='right'>Right arrow</button>
    </div>
  );
};

export default DefaultView;

*/