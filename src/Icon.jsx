/**
 * Icon Component for tinglejs
 * @auther guanghong.wsj
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import iconMap from './iconMap';

class Icon extends React.Component {
  render() {
    const CamelName = this.props.name.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join('');
    const Svg = iconMap[CamelName];
    if (Svg) {
      return <Svg {...this.props} />;
    }
    console.error(`cant't find svg: ${this.props.name}`);
    return null;
  }
}

Icon.defaultProps = {
  className: '',
  name: '',
  width: '32px',
  height: '32px',
  fill: '#000',
  onClick: () => {},
};


// http://facebook.github.io/react/docs/reusable-components.html
Icon.propTypes = {
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

Icon.displayName = 'Icon';

Object.keys(iconMap).forEach((icon) => {
  Icon[icon] = iconMap[icon];
});

export default Icon;
