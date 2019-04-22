import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconOutLink extends React.Component {
  render() {
    try {
      const Svg = require('../svg/out-link.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: out-link`);
      return null;
    }
  }
}

IconOutLink.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconOutLink.propTypes = {
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

IconOutLink.displayName = 'IconOutLink';

export default IconOutLink;
