import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component { 
  

increment = () => {
this.props.dispatch({type:'INC'})
}

decrement = () => {
 this.props.dispatch({type:'DEC'})
}


  render() {
    return (
      <div className="App">
       <p>Counter</p><br></br>
       <button onClick={this.increment}>+</button>
       <span>{this.props.count}</span>
       <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
   count:state.count
});
export default connect(mapStateToProps)(App);
