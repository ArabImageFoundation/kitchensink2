import React,{Component} from 'react';
import connect,{actions} from './redux/connect';
import Columns from './Columns'
import Collections from './Collections';

class App extends Component{

	render(){
		return (<div id='Root'>
			<Collections/>
			<Columns/>
		</div>)
	}
}


export default App;
