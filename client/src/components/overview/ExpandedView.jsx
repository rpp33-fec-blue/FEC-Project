import GalleryIcon from './GalleryIcon.jsx';

const ExpandedView = ( { styles, selectedStyleId, selectedImageIndex, updateSelectedImageIndex, updateDefaultView } ) => {


// Props: styles, selectedStyleId, selectedImageIndex, updateSelectedImageIndex, updateDefaultView

  return (
    <div>
      <img></img> {/* TO DO - insert selected image
                            - should occupy entire screen
                            - on hover, cursor changes to a +
                            - clicking will zoom 2.5x
                              - on hover, cursor changes to a -
                              - clicking returns to normal expanded view
                  */}
      {/* TO DO - insert small icons for other images (<= 7) */}
      <GalleryIcon
        styles={props.styles}
        selectedStyleId={props.selectedStyleId}
        selectedImageIndex={props.selectedImageIndex}
        updateSelectedImageIndex={this.props.updateSelectedImageIndex}
      />
      <button onClick={updateSelectedImageIndex} value='left'>Left arrow</button>
      <button onClick={updateSelectedImageIndex} value='right'>Right arrow</button>
    </div>
  );
};

export default ExpandedView;