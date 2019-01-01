import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
//import rootreducer from './store/reducer.js'
import {Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
const initstate={
    count:42
};
function reducer(state=initstate,action)
{   switch(action.type)
    {
        case 'INC':
                return({
                    ...state,
                    count:state.count+1
                });
        case 'DEC':
        return({
            ...state,
            count:state.count-1
        }); 
        default :return state;
    }
   
}
const store=createStore(reducer);
store.dispatch({type:'INC'});
store.dispatch({type:'DEC'});
ReactDOM.render(
<Provider store={store}><App /></Provider>,
 document.getElementById('root'));
serviceWorker.unregister();
