import {INCREMENT} from '../constants.js';

export default (number=0, action) => {
	if(action.type == INCREMENT){
		number ++;
	}
	return number;
}