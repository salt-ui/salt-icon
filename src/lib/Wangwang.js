import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconWangwang extends React.Component {
  render() {
    try {
      const Svg = require('../svg/wangwang.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: wangwang`);
      return null;
    }
  }
}

IconWangwang.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconWangwang.propTypes = {
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

IconWangwang.displayName = 'IconWangwang';

export default IconWangwang;
