import { createStore } from 'redux';

const initialState = {
  count: 8
};

const reducer  = (state = initialState, action) =>{
  console.log('reducer running',action);

  switch (action.type) {
    case 'Increment':
        return Object.assign({},state, { count: state.count + 1});
    case 'Decrement':
        return Object.assign({},state, { count: state.count - 1});
    default:
        return state;
  }

}

const store = createStore(reducer);

export default store;
