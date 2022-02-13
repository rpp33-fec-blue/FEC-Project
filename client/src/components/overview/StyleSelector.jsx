import StyleThumbnail from './StyleThumbnail.jsx';

const StyleSelector = ( { styles, selectedStyleId, selectedStyleIndex, updateSelectedStyle } ) => {

  // Props: styles, selectedStyleIndex, selectedStyleId, updateSelectedStyle

  return (
    <div>
      {/* Style name */}
      {/* Style Thumbnails (<= 4 per row) */}
   </div>
  );
};

export default StyleSelector;










/*

const StyleSelector = ({ styles, selectedStyleIndex, selectedStyleId, updateSelectedStyle }) => {
  return (
    <div>
      <h4>Style > {styles.results[selectedStyleIndex].name}</h4>
      {TO DO - limit to 4 per row}
      {styles.results.map((style) => <StyleThumbnail style={style} selectedStyleId={selectedStyleId} updateSelectedStyle={updateSelectedStyle} />)}
    </div>
  );
};

export default StyleSelector;

*/