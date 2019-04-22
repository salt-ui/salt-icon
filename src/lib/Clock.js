import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconClock extends React.Component {
  render() {
    try {
      const Svg = require('../svg/clock.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: clock`);
      return null;
    }
  }
}

IconClock.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconClock.propTypes = {
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

IconClock.displayName = 'IconClock';

export default IconClock;
