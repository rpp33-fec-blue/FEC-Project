import React from 'react';

class Comparison extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var classes = 'comparison-modal';
    if ( this.props.visible ) {
      classes += ' comparison-modal-visible';
    }

    return (
      <div className={classes} onClick={this.props.toggle}>
        <div className='comparison-content'></div>
          <p>This should be a pop up... in the center</p>
      </div>
    )
  }
}

export default Comparison;