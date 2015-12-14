import React from 'react';
import {merge} from 'ramda';
import Collection from './Collection';
import Contract from './Contract';
//import ObjectType from './Object';
import Photographer from './Photographer'
import Photo from './Photo';

const Paper = require('material-ui/lib/paper');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');

const columnWidth = 400

const style = {
	width:columnWidth
,	height:'100%'
,	position:'absolute'
,	top:0
,	bottom:0
}

const map = {
	Collection
,	Contract
,	Photo
}

const getRight = (n,total)=>((total-n-1)*100)

const getStyle = (n,total)=>merge(style,{right:getRight(n,total)})

export default ({meta,index,total,dispatch}) => (<div style={getStyle(index,total)}>
	{(map[meta.type] && React.createElement(map[meta.type],{...meta,index,dispatch})) || <div>error</div>}
</div>)