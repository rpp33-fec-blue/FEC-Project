import GalleryIcon from './GalleryIcon.jsx';
import PropTypes from 'prop-types';
import statePropTypes from '../prop-types.js';

const ExpandedView = ( { styles, selectedStyleId, selectedImageIndex, updateSelectedImageIndex, updateDefaultView } ) => {

  return (
    <div className='expandedView-component'>
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

GalleryIcon.propTypes = {
  styles: statePropTypes.stylesPropTypes,
  selectedImageIndex: PropTypes.number,
  updateSelectedImageIndex: PropTypes.func,
  updateDefaultView: PropTypes.func
};

export default ExpandedView;