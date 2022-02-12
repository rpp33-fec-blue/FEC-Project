const StyleThumbnail = () => {

  // Props: style, selectedStyleId, updateSelectedStyle

  // If style_id equals selectedStyleId
  //   Return thumbnail with check mark and without event handler
  // Else
  //   Return thumbnail without check mark and with event handler

  return (
    <div>

    </div>
  );
};

export default StyleThumbnail;










/*

const StyleThumbnail = ({ style, selectedStyleId, updateSelectedStyle }) => {
  if ( style.style_id === selectedStyleId ) {
    return (
      <div>
        {TO DO - insert check mark}
        <p>Check mark</p>
        <img src={ style.photos.thumbnail_url }></img>
      </div>
    );
  } else {
    return (
      <div>
        <img src={ style.photos.thumbnail_url } styleId={ style.style_id } onClick={ updateSelectedStyle }></img>
      </div>
    );
  }
};

export default StyleThumbnail;

/*