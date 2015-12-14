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

export default ({subheader,type,parentProp,childProp,items,dispatch,index})=>(<List subheader={subheader}>
	{items.map((item,key)=>
		<ListItem 
			key={key} 
			primaryText={item[childProp]}
			rightIcon={<ArrowDropRight/>}
			onClick={()=>dispatch(actions.addColumn({
				type:type
			,	view:'create'
			,	parentIndex:index
			,	parentProp:parentProp
			,	object:item
			,	childIndex:key
			}))}
		/>
	)}
	<ListItem 
		primaryText='add'
		leftIcon={<ActionGrade />}
		rightIcon={<ArrowDropRight/>}
		onClick={()=>dispatch(actions.addColumn({
			type:type
		,	view:'create'
		,	parentIndex:index
		,	parentProp:parentProp
		}))}
	/>
</List>)