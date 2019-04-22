import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconTipFull extends React.Component {
  render() {
    try {
      const Svg = require('../svg/tip-full.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: tip-full`);
      return null;
    }
  }
}

IconTipFull.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconTipFull.propTypes = {
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

IconTipFull.displayName = 'IconTipFull';

export default IconTipFull;
