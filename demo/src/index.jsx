/**
 * Icon Component Demo for tingle
 * @author fushan
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */
const Demo = require('./IconDemo');
const ReactDOM = require('react-dom');
const React = require('react');

if (window.FastClick) {
  window.FastClick.attach(document.body);
}

// 渲染demo
ReactDOM.render(<Demo />, document.getElementById('TingleDemo'));
