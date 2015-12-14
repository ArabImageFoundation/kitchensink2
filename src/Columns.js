import React from 'react';
import connect,{actions} from './redux/connect';
const Paper = require('material-ui/lib/paper');
import Column from './Column';

const style = {
	position:'absolute'
,	top:0
,	bottom:0
,	right:0
,	width:'8em'
}

export default connect(({columns,dispatch}) => (<div style={style}>
	{columns.map((meta,key)=>{

			return <Column 
				meta={meta}
				index={key}
				key={key}
				total={columns.length}
				dispatch={dispatch}
			/>
		}
	)}
</div>))