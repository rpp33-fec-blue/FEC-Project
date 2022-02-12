import GalleryThumbnail from './GalleryThumbnail.jsx';

const DefaultView = () => {


  //  Props: photos, selectedImageIndex, updateSelectedImageIndex

  return (
    <div>
      <img></img> {/* TO DO - insert selected image (if clicked, should return ExpandedView */}
      {/* TO DO - insert gallery thumbnails for other images (<= 7) */}
      <button onClick={updateSelectedImageIndex} value='left'>Left arrow</button>
      <button onClick={updateSelectedImageIndex} value='right'>Right arrow</button>
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