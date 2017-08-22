import {createStore,applyMiddleware,compose} from 'redux';
import reducers from '../reducers/index';
import logger from '../middlewares/logger';
import generate_id from '../middlewares/generate_id';

// --- START -  Dev Tools Script
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger,generate_id),
  // other store enhancers if any
);

// --- END -  Dev Tools Script

// --Standart creating middlewares
//const enhancer = applyMiddleware(logger);

const store = createStore(reducers,{},enhancer);

// dev only
if(DEV_ENV){
	window.store = store;
}

export default store;