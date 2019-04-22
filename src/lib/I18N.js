import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconI18N extends React.Component {
  render() {
    try {
      const Svg = require('../svg/i18n.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: i18n`);
      return null;
    }
  }
}

IconI18N.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconI18N.propTypes = {
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

IconI18N.displayName = 'IconI18N';

export default IconI18N;
