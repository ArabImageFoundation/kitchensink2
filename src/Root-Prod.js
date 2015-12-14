import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import getStore from './redux/store';
import App from './App';

const store = getStore();


class Root extends Component{
	render(){
		return (<Provider store={store}>
				<App />
		</Provider>);
	}
};


export default Root;
