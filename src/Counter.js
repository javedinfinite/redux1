import React from "react";
import {connect} from "react-redux";
import Actions from './actionTypeConstants';

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]) — Creates a higher-order component for making container components out of base React components



function Counter(props){
  return(
    <div>
    <h1>I am a Counter on master</h1>
    <p>Count : {props.count}</p>
    <button onClick={props.onIncrementClick}>Increment</button>
    <button onClick={props.onDecrementtClick}>Decrement</button>

    </div>
  )
}

//This function will provide state to props of components
function mapStateToProps(state){
  console.log("mapStateToProps",state);
  return{
    count: state.count
  }
}

//this function will provide info to the store with the action taken from view(by components), so that store can change corresponding states itself accordingly
function mapDispatchToProps(dispatch){
  console.log('mapDispatchToProps ');
  return{
    onIncrementClick: () => {
      const action = { type: Actions.INCREMENT_REQUESTED};
      dispatch(action);
    },
    onDecrementtClick: () => {
      const action = { type: Actions.DECREMENT_REQUESTED};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
