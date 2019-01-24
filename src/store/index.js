import { createStore } from 'redux';
import Actions from '../actionTypeConstants';

const initialState = {
  count: 8
};

//when we load our view, we don't have any action. That time we need to return an object, hence we return a default object
//But what default object is to be returned? Hence we have initialised argument state with a default object 'initialState'
//So as per js syntax when their is no value passed as first argument , default this 'initialState' object is passed
//else instead of this whole states of store is passed.
// Note : When we call dispatch method we pass only action type and not the store as because dispatch work is
//to provide action from view to store
//Now store will call reducer with argument1 as the action provided by dispatch and argument2 as store
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
