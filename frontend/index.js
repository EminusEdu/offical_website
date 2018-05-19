import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';


const mylogger = (store) => (next) => (action) => {
  next(action);
}
const store = createStore(allReducers, {}, applyMiddleware(thunk, createLogger()));

store.dispatch({type: "RECEIVE_TESTS", name: "Bob"})



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
