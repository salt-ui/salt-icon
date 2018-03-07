import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import svg4everybody from 'svg4everybody';

const webkitUA = /\bAppleWebKit\/(\d+)\b/;

class Symbol extends React.Component {
  componentDidMount() {
    const webkitUAVersion = (navigator.userAgent.match(webkitUA) || [])[1];
    svg4everybody({
      polyfill: webkitUAVersion === '600' || webkitUAVersion < 537,
    });
  }

  prefixClass(str) {
    return `${this.props.prefixCls}-${str}`;
  }

  render() {
    const t = this;
    const { className, name, onClick, ...others } = t.props;
    delete others.prefixCls;

    return (
      <div
        onClick={onClick} className={classnames(t.prefixClass('icon'), {
          [className]: !!className,
        })}
      >
        <svg className={t.prefixClass('icon-svg')} {...others}>
          <use xlinkHref={`#${name}`} />
        </svg>
        <div className={t.prefixClass('icon-mask')} />
      </div>
    );
  }
}

Symbol.defaultProps = {
  className: '',
  prefixCls: 't',
  name: '',
  width: 32,
  height: 32,
  fill: '#000',
  onClick: () => {},
};


// http://facebook.github.io/react/docs/reusable-components.html
Symbol.propTypes = {
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  onClick: PropTypes.func,
};

Symbol.displayName = 'Symbol';

export default Symbol;
