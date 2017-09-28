import {createStore , applyMiddleware } from "redux";
import {combineReducers} from 'redux'
import {createLogger as logger} from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import axios from "axios"


var data ={
	num1:0,
	num2:0,
	result:0,
	operation:null	

};
const reducer = (state=data, action) =>{

	console.log('Inside reducer');
	

	switch(action.type){
		
		case "SET1":{
			console.log('SET 1 :' + action.payload);
			return Object.assign({}, state, {
						num1: action.payload
					})

			break;
		}

		case "SET2":{
			console.log('SET 2 :' + action.payload);
			return Object.assign({}, state, {
						num2: action.payload
					})


			break;
		}

		case "ADD":{
			console.log('ADD Action');
			console.log('Num1 : ' + state.num1);
			console.log('Num2 : ' + state.num2);
			var digit1 = state.num1;
			var digit2 = state.num2;

			axios.get('http://localhost:3002/cal', {
				params: {
			    		digit1,digit2
				}
			  })
			  .then(function (response) {
			  		console.log('OUTPUT : ' + response.data.output);
			  		Object.assign({}, state, {
						result: response.data.output
					})
			    console.log(response.data.output);
			  })
			  .catch(function (error) {
			    console.log(error);
  			  });
			return state; 
		}
	}
	return state;
}

const middleware = applyMiddleware(promise() , thunk , logger());

var combine = combineReducers({reducer});

const store = createStore(combine, middleware);

//store.dispatch({type:"TEST", payload:1});


/*axios.get('http://localhost:3002/cal', {
	params: {
    		num1:1,
    		num2:3
	}
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });*/


export default store;