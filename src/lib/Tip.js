import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconTip extends React.Component {
  render() {
    try {
      const Svg = require('../svg/tip.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: tip`);
      return null;
    }
  }
}

IconTip.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconTip.propTypes = {
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

IconTip.displayName = 'IconTip';

export default IconTip;
