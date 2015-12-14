const FontIcon = require('material-ui/lib/font-icon');
const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');
import getHelp from './utils/getHelp'
import FieldSet from './utils/FieldSet'
import getError from './utils/getError'
const Avatar = require('material-ui/lib/avatar');

export default function struct(locals){
	const len = locals.path.length;
	const children = [
		(locals.help) && model.getHelp(locals)
	,	(locals.error && locals.hasError) && model.getError(locals)
	,	locals.order.map(name => locals.inputs[name])
	]
	if(len==0){
		return (<Card>
			<CardHeader
				title={locals.label}
				avatar={<Avatar icon={<FontIcon className="material-icons">home</FontIcon>}/>}
			/>
			{children}
		</Card>)
	}else{
		return (<div>{children}</div>)
	}
}