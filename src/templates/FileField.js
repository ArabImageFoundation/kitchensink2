import Image from './Image';

const FlatButton = require('material-ui/lib/flat-button');

export function fileField(locals){
	const label = (locals.value && locals.value.name) || locals.label
	const inputStyle = {
		cursor: 'pointer',
		position: 'absolute',
		top: '0',
		bottom: '0',
		right: '0',
		left: '0',
		width: '100%',
		opacity: '0',
	}
	const button = (<FlatButton label={label} secondary={true}>
		<input type="file" onChange={(evt)=>locals.onChange(evt.target.files[0])} style={inputStyle}/>
	</FlatButton>)
	const image = locals.value ? <Image src={locals.value}/> : null;
	return (<div>{image}{button}</div>)
}