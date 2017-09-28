import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { add, subtract, divide, multiply, set1, set2 } from "./actions/userActions";

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {value: ''};
  }
  
 /* setValueNum1(event){

    this.setState({num1: event.target.value});
    console.log('TEST ' + event.target.value);
    console.log('num1 : ' + this.state.num1);

  }*/
  setValueNum2(event){

    this.setState({num2: event.target.value});

  }
  

  render() {

    var num1 = this.props.num1;
    var num2 = this.props.num2;
    var result = this.props.result;
    console.log('Number 1 : ' + this.props.num1);
    console.log('Number 2 : ' + this.props.num2);
    console.log('Result : ' + this.props.result);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Calculator</h2>
        </div>
        

        <div className="row">
          
            <div className="col-sm-6 form-group row">
                <label className="col-form-label">Number 1 : </label>
                <input type="text" id="num1"  onChange={() =>this.props.dispatch(this.props.set1(document.getElementById('num1').value))}></input> 
            </div>
        </div>


        <div className="row">
          
            <div className="col-sm-6 form-group row">
                <label>Number 2 : </label>
                <input type="text" id="num2" onChange={() =>this.props.dispatch(this.props.set2(document.getElementById('num2').value))}></input> 
            </div>
        </div>

        <div className="row">
          
            <div className="col-sm-6 form-group row">
                <button type="submit" onClick={() =>this.props.dispatch(this.props.add(num1,num2))} className="btn btn-success" >Addition</button>
                <button type="submit" onClick={() =>this.props.dispatch(this.props.subtract())} className="btn btn-success" >Subtraction</button>
                <button type="submit" onClick={() =>this.props.dispatch(this.props.divide())} className="btn btn-success" >Division</button>
                <button type="submit" onClick={() =>this.props.dispatch(this.props.multiply())} className="btn btn-success" >Multiplication</button> 
            </div>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => { 
    let actions = {add, subtract, divide, multiply, set1, set2};
    return{...actions, dispatch};
};

const mapStateToProps = (state) => { 
  return { num1: state.reducer.num1,
           num2: state.reducer.num2,
           result: state.reducer.result
         };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
