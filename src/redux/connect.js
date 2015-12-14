import {connect} from 'react-redux';
export actions from './actions';
import mapStateToProps from './mapStateToProps';

export default connect(mapStateToProps)