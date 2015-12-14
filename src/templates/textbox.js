const TextField = require('material-ui/lib/text-field');
import FileField from './FileField'

export default function textField(locals){
	if(locals.type=='hidden'){
		return <input type='hidden'/>
	}
	if (locals.type !== 'file') {
		return (<div>
			<TextField floatingLabelText={locals.label} value={locals.value} onChange={(evt)=>locals.onChange(evt.target.value)} />
		</div>)
	}else{
		return FileField(locals)
	}
}