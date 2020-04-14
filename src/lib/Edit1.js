import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconEdit1 extends React.Component {
  render() {
    try {
      const Svg = require('../svg/edit1.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: edit1`);
      return null;
    }
  }
}

IconEdit1.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// http://facebook.github.io/react/docs/reusable-components.html
IconEdit1.propTypes = {
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

IconEdit1.displayName = 'IconEdit1';

export default IconEdit1;