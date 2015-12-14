import React from 'react';
import {merge,curry} from 'ramda';
import {actions} from './redux/connect';
import ArrowDropRight from 'material-ui/lib/svg-icons/navigation-arrow-drop-right';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
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


const onChange = curry((dispatch,index,name,evt) => {
	dispatch(actions.modifyColumn({
		index
	,	[name]:evt.target.value
	}))
});



const create = ({dispatch,view,index,object}) => {
	const {name,contracts,reference,donor,acquisition,content,photos,albums,objects} = object;
	const on = onChange(dispatch,index)
	return (<Card style={style}>
		<CardHeader title={name} subtitle="collection" avatar={<Avatar>C</Avatar>}/>
		<CardText style={textStyle}>
			<List>
				<TextField floatingLabelText="reference" value={reference} onChange={on('reference')} autoFocus/>
				<TextField floatingLabelText="name" value={name}  onChange={on('name')}/>
				<TextField floatingLabelText="donor" value={donor} onChange={on('donor')}/>
				<TextField floatingLabelText="acquisition" value={acquisition} onChange={on('acquisition')}/>
				<TextField floatingLabelText="content" value={content} onChange={on('content')}/>
			</List>
				<ListDivider />
			<LinkedList subheader="Contracts" type='Contract' parentProp='contracts' items={contracts} childProp='reference' dispatch={dispatch} index={index}/>
			<LinkedList subheader="Photos" type='Photo' parentProp='photos' items={photos} childProp='title' dispatch={dispatch} index={index}/>
			<LinkedList subheader="Albums" type='Album' parentProp='albums' items={albums} childProp='reference' dispatch={dispatch} index={index}/>
			<LinkedList subheader="Objects" type='Object' parentProp='objects' items={objects} childProp='reference' dispatch={dispatch} index={index}/>
		</CardText>
		<CardActions style={{position:'absolute',bottom:0}}>
			<RaisedButton label="save" primary onClick={()=>dispatch(actions.save({type:'Collection',object}))}/>
			<RaisedButton label="cancel" onClick={()=>dispatch(actions.removeColumn())}/>
		</CardActions>
	</Card>)
}

export default (props) => create(props)