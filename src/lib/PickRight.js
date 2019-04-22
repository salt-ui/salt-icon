import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconPickRight extends React.Component {
  render() {
    try {
      const Svg = require('../svg/pick-right.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: pick-right`);
      return null;
    }
  }
}

IconPickRight.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconPickRight.propTypes = {
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

IconPickRight.displayName = 'IconPickRight';

export default IconPickRight;
