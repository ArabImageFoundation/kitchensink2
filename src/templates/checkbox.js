import t from '../src';
const DatePicker = require('material-ui/lib/date-picker/date-picker');
const DatePickerDialog = require('material-ui/lib/date-picker/date-picker-dialog');
const TextField = require('material-ui/lib/text-field');
const FlatButton = require('material-ui/lib/flat-button');
const RaisedButton = require('material-ui/lib/raised-button');
const AutoComplete = require('material-ui/lib/auto-complete');
const FloatingActionButton = require('material-ui/lib/floating-action-button');
const SelectField = require('material-ui/lib/select-field');
const Menu = require('material-ui/lib/menus/menu');
const MenuItem = require('material-ui/lib/menus/menu-item');
const MenuDivider = require('material-ui/lib/menus/menu-divider');
import React from 'react';
import transform from '../src/utils/transform';
import DeferredImage from '../src/Templates/utils/DeferredImage';



function autocomplete(data){
	return function(locals){
		const dataSource = transform(data(),item=><AutoComplete.Item primaryText={item}/>);
		return (<AutoComplete
			fullWidth={true}
			floatingLabelText={locals.label}
			onUpdateInput={(t) =>console.log(t)}
			showAllItems={true}
			dataSource={dataSource}
			onNewRequest={(t, index) => {console.log('request:'+index);}}
		/>)
	}
}

t.form.Form.templates.textbox = textField
t.form.Form.templates.file = fileField;