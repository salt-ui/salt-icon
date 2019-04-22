import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

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


// https://facebook.github.io/react/docs/reusable-components.html
IconFileExcel.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

IconFileExcel.displayName = 'IconFileExcel';

export default IconFileExcel;
