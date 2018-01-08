/**
 * Icon Component Demo for tingle
 * @author hanyu
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
const Icon = require('../../src');
const SymbolIcon = require('../../src/Symbol');
const { User } = Icon;
const Cross = require('../../lib/Cross');

const make2dArr = (arr = []) => {
  const newArr = [];
  let count = 0;
  arr.forEach((item, index) => {
    const i = index % 4;
    if (i === 0) {
      newArr[count] = [];
    }
    newArr[count].push(item);
    if (i === 3) {
      count += 1;
    }
  });
  return newArr;
};

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorIcons: [
        'cross',
        'check',
        'map',
        'pen',
        'photo',
      ],
      icons: [
        'angle-down',
        'angle-left',
        'angle-right',
        'angle-up',
        'direction-bottom',
        'direction-left',
        'direction-right',
        'direction-top',
        'check-round',
        'cross-round',
        'check',
        'cross',
        'option-checked',
        'face-sad-full',
        'face-sad-line',
        'face-smile-full',
        'face-smile-line',
        'info-circle',
        'info-round',
        'note-round',
        'warn-line',
        'field-required',
        'loading',
        'loading-round',
        'map',
        'plus-round',
        'minus-round',
        'plus-circle',
        'minus-circle',
        'plus-thin',
        'plus',
        'minus-thin',
        'pen',
        'photo',
        'search',
        'star-full',
        'star-line',
        'star',
        'time',
        'setting',
        'toast-error',
        'toast-fail',
        'toast-loading',
        'toast-success',
        'user',
        'totop',
        'eye',
        'eye-close',
        'lock',
        'upload',
      ],
    };
  }

  render() {
    console.log(make2dArr(this.state.icons));
    return (
      <div>
        <div className="t-P20 t-FAC">
          <Icon name="star" className="logo" />
        </div>
        <div className="demo-icon-title">单色SVG图标</div>
        <div className="demo-grid">
          {make2dArr(this.state.icons).map((icons, index) => (
            <div className="demo-grid-row" key={index}>
              {icons.map((icon, index) => (
                <div className="demo-grid-cell" key={index}>
                  <Icon name={icon} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="demo-icon-title">单色SVG图标, 设置尺寸和颜色</div>
        <div className="demo-grid">
          <div className="demo-grid-row">
            {[
              { name: 'toast-error', fill: '4d9df0' },
              { name: 'toast-fail', fill: '#9462a9' },
              { name: 'toast-loading', fill: '#7bc380' },
              { name: 'toast-success', fill: '#942a09' },
              { name: 'plus-circle', fill: '#e65100' },
            ].map((icon, index) => (
              <div className="demo-grid-cell" key={index}>
                <Icon name={icon.name} fill={icon.fill} />
              </div>
            ))}
          </div>
        </div>
        <div className="demo-icon-title">使用 Symbol</div>
        <SymbolIcon name="field-required" fill="#e65100" />
        <div className="demo-icon-title">使用 Icon.Xxx</div>
        <User />
        <div className="demo-icon-title">使用 /lib/Xxx</div>
        <Cross />
      </div>
    );
  }
}

module.exports = Demo;

