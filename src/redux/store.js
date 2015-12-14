import {compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools'

const createStoreWithMiddleware = (process.env.NODE_ENV === 'production') ? 
	compose(
		applyMiddleware(thunkMiddleware)
	)(createStore):
	compose(
		applyMiddleware(thunkMiddleware)
	,	devTools()
	//,	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
	)(createStore);

export default function getStore(state){
	var reducer = require('./actions.js').default.reducer;
	var initialState = require('./initialState.js').default;
	var store = createStoreWithMiddleware(reducer,window.__INITIAL_STATE__||initialState);
	if(process.env.NODE_ENV !== 'production'){
		if(module.hot){
			module.hot.accept(['./actions.js','./initialState.js'], () => {
				var nextReducer = require('./actions.js').default.reducer;
				store.replaceReducer(nextReducer);
			});
		}
	}
	return store;
}
