import React from 'react';
import connect,{actions} from './redux/connect';
import LinkedList from './LinkedList';
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
const Avatar = require('material-ui/lib/avatar');
const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');
const FlatButton = require('material-ui/lib/flat-button');
const RaisedButton = require('material-ui/lib/raised-button');
const FloatingActionButton = require('material-ui/lib/floating-action-button');

export default connect(({dispatch,Collection}) => (<Card>
	<CardHeader title="Collections" avatar={<Avatar>C</Avatar>}/>
	<LinkedList subheader="Collections" type='Collection' parentProp='collections' items={Collection} childProp='reference' dispatch={dispatch}/>
</Card>));