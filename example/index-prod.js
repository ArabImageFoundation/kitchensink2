import style from "./style.styl";
import React from 'react';
import ReactDOM from 'react-dom';
var Root = require('../src/Root-Prod.js').default;

function render(){
	ReactDOM.render(<Root/>, document.getElementById('Content'));
}

render();