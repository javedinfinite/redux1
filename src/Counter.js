import React from "react";
import {connect} from "react-redux";
import Actions from './actionTypeConstants';

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]) — Creates a higher-order component for making container components out of base React components



function Counter(AllProps){
  // Here AllProps is an argument which is receiving all props provided by connect method and also props given by user at the time of using the componentDidMount = () => {
  // Now if a prop is given same name in case of connect's (mapStateToProps or mapDispatchToProps) and in case of props from where component is used itself
  // Then connect prop will be given priority  
  
  return(
    <div>
    <h1>I am a Counter on master</h1>
    <p>Count : {AllProps.count}</p>
    <button onClick={AllProps.onIncrementClick}>Increment</button>
    <button onClick={AllProps.onDecrementtClick}>Decrement</button>

    </div>
  )
}

//This function will provide state to props of components
//Here StoreStates is an argument which is receiving all store states provided by connect method
//When a change occurs, connect calls a function that we write called mapStateToProps(), and in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. Here, we want to provide state.count, and allow our component to have access to them through a prop called count
function mapStateToProps(StoreStates){
  console.log("mapStateToProps",StoreStates);
  return{
    count: StoreStates.count //Here we are using the count state from store and returning the same value as count object
  }
}

//this function will provide info to the store with the action taken from view(by components), so that store can change corresponding states itself accordingly
//Here StoreDispatch is an argument which is receiving a method called 'dispatch' which is a part of store class
//This dispatch method takes an action as argumnt and passes to the store
function mapDispatchToProps(StoreDispatch){
  console.log('mapDispatchToProps ');
  return{//we are returning object literal { onIncrementClick: value, onDecrementtClick: otherValue };
  //':' assigns a function as a property of an object literal. 
  onIncrementClick: () => {
      const action = { type: Actions.INCREMENT_REQUESTED};
      StoreDispatch(action);
    },
    onDecrementtClick: () => {
      const action = { type: Actions.DECREMENT_REQUESTED};
      StoreDispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
