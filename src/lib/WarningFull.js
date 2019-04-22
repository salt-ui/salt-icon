import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconWarningFull extends React.Component {
  render() {
    try {
      const Svg = require('../svg/warning-full.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: warning-full`);
      return null;
    }
  }
}

IconWarningFull.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconWarningFull.propTypes = {
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

IconWarningFull.displayName = 'IconWarningFull';

export default IconWarningFull;
