const DatePicker = require('material-ui/lib/date-picker/date-picker');
const DatePickerDialog = require('material-ui/lib/date-picker/date-picker-dialog');

export default function date(locals){
	return (<div><DatePicker
		floatingLabelText={locals.label}
		//value={locals.value}
		//onChange={(n,date)=>{console.log(date);locals.onChange(date)}}
	/></div>)
}