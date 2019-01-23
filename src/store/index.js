import { createStore } from 'redux';
import Actions from '../actionTypeConstants';

const initialState = {
  count: 8
};

const reducer  = (state = initialState, action) =>{
  console.log('reducer running',action);

  switch (action.type) {
    case Actions.INCREMENT_REQUESTED:

// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
//Object.assign(target, ...sources) , 
        return Object.assign({},state, { count: state.count + 1});//changing state "count defined above"
    case Actions.DECREMENT_REQUESTED:
        return Object.assign({},state, { count: state.count - 1});//changing state "count defined above"
    default:
        return state;
  }
}

const store = createStore(reducer);

export default store;
