import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconFileEmpty extends React.Component {
  render() {
    try {
      const Svg = require('../svg/file-empty.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: file-empty`);
      return null;
    }
  }
}

IconFileEmpty.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// http://facebook.github.io/react/docs/reusable-components.html
IconFileEmpty.propTypes = {
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

IconFileEmpty.displayName = 'IconFileEmpty';

export default IconFileEmpty;