import style from "./style.styl";
import React from 'react';
import ReactDOM from 'react-dom';
var Root = require('../src/Root.js').default;

function render(){
	ReactDOM.render(<Root/>, document.getElementById('Content'));
}


if(module.hot) {
	module.hot.accept('../src/Root.js', function() {
		Root = require('../src/Root.js').default
		render();
	});
}

render();