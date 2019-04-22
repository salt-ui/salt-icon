import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class IconFileXml extends React.Component {
  render() {
    try {
      const Svg = require('../svg/file-xml.svg');
      return <Svg {...this.props} />
    } catch(e) {
      console.error(`cant't find svg: file-xml`);
      return null;
    }
  }
}

IconFileXml.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// https://facebook.github.io/react/docs/reusable-components.html
IconFileXml.propTypes = {
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

IconFileXml.displayName = 'IconFileXml';

export default IconFileXml;
