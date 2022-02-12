import GalleryIcon from './GalleryIcon.jsx';

const ExpandedView = () => {


  //  Props: photos, selectedImageIndex, updateSelectedImageIndex

  return (
    <div>
      <img></img> {/* TO DO - insert selected image */}
      {/* TO DO - insert small icons for other images (<= 7) */}
      <button onClick={updateSelectedImageIndex} value='left'>Left arrow</button>
      <button onClick={updateSelectedImageIndex} value='right'>Right arrow</button>
    </div>
  );
};

export default ExpandedView;