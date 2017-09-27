import {createStore , applyMiddleware } from "redux";
import {combineReducers} from 'redux'
import {createLogger as logger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import axios from "axios"


var data ={

};
const reducer = (state={}, action) =>{

	console.log('Inside reducer');
	switch(action.type){
		case "TEST":
		console.log('TEST Action'); 
	}
	return state;
}

const middleware = applyMiddleware(promise() , thunk , logger());

var combine = combineReducers({reducer});

const store = createStore(combine, middleware);

store.dispatch({type:"TEST", payload:1});

store.dispatch((dispatch) =>{
	store.dispatch({type:"TEST", payload:1})
	axios.get("localhost/8080/cal")
	.then((response) =>{
		dispatch({type:"DATA_FROM_NODE" , payload: 1})
	})
	.catch((err) => {
		dispatch({type:"ERROR" , payload: 2})
	})

})

export default store;