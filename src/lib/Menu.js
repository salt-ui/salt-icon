import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconMenu extends React.Component {
  render() {
    try {
      const Svg = require('../svg/menu.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: menu`);
      return null;
    }
  }
}

IconMenu.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconMenu.propTypes = {
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

IconMenu.displayName = 'IconMenu';

export default IconMenu;
