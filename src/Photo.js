import React from 'react';
import {merge,curry} from 'ramda';
import {actions} from './redux/connect';
import ArrowDropRight from 'material-ui/lib/svg-icons/navigation-arrow-drop-right';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
const AutoComplete = require('material-ui/lib/auto-complete');
const Paper = require('material-ui/lib/paper');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
const Avatar = require('material-ui/lib/avatar');
const TextField = require('material-ui/lib/text-field');
const RaisedButton = require('material-ui/lib/raised-button');
const Menu = require('material-ui/lib/menus/menu');
const MenuItem = require('material-ui/lib/menus/menu-item');
const MenuDivider = require('material-ui/lib/menus/menu-divider');
const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');
import LinkedList from './LinkedList';

const style = {
	width:'100%'
,	height:'100%'
,	position:'relative'
}

const textStyle = {
	position:'absolute'
,	top:72
,	bottom:52
,	overflow:'auto'
}


const onChange = curry((dispatch,index,title,evt) => {
	dispatch(actions.modifyColumn({
		index
	,	[title]:evt.target.value
	}))
});



const create = ({dispatch,view,index,object:{title,contracts,reference,subject,photographer}}) => {
	const on = onChange(dispatch,index)
	return (<Card style={style}>
		<CardHeader title={title} subtitle="photo" avatar={<Avatar>C</Avatar>}/>
		<CardText style={textStyle}>
			<List>
				<TextField floatingLabelText="reference" value={reference} onChange={on('reference')} autoFocus/>
				<TextField floatingLabelText="title" value={title}  onChange={on('title')}/>
				<TextField floatingLabelText="subject" value={subject} onChange={on('subject')}/>
				<AutoComplete
					floatingLabelText='photographer'
					showAllItems = {true}
					dataSource={{
					a:(<AutoComplete.Item primaryText={'a'} secondaryText="&#9786;" />),
					divider:(<AutoComplete.Divider/>),
					b:(<AutoComplete.Item primaryText={'b'} secondaryText="&#9885;" />),
					}}
				/>
			</List>
		</CardText>
		<CardActions style={{position:'absolute',bottom:0}}>
			<RaisedButton label="save" primary/>
			<RaisedButton label="cancel" onClick={()=>dispatch(actions.removeColumn())}/>
		</CardActions>
	</Card>)
}

export default (props) => create(props)