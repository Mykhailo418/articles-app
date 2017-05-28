import {createStore} from 'redux';
import reducers from '../reducers/index';

const store = createStore(reducers);

// dev only
if(DEV_ENV){
	window.store = store;
}

export default store;