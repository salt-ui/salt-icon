import React from 'react';
import classnames from 'classnames';

class IconFileExcel extends React.Component {
  render() {
    try {
      const Svg = require('../svg/file-excel.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: file-excel`);
      return null;
    }
  }
}

IconFileExcel.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// http://facebook.github.io/react/docs/reusable-components.html
IconFileExcel.propTypes = {
  className: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  width: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  height: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  fill: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

IconFileExcel.displayName = 'IconFileExcel';

export default IconFileExcel;