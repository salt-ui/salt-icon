import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconYouxuanzhuan extends React.Component {
  render() {
    try {
      const Svg = require('../svg/youxuanzhuan.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: youxuanzhuan`);
      return null;
    }
  }
}

IconYouxuanzhuan.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// http://facebook.github.io/react/docs/reusable-components.html
IconYouxuanzhuan.propTypes = {
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

IconYouxuanzhuan.displayName = 'IconYouxuanzhuan';

export default IconYouxuanzhuan;