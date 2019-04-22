import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconMore1 extends React.Component {
  render() {
    try {
      const Svg = require('../svg/more1.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: more1`);
      return null;
    }
  }
}

IconMore1.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconMore1.propTypes = {
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

IconMore1.displayName = 'IconMore1';

export default IconMore1;
