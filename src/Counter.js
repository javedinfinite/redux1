import React from "react";
import {connect} from "react-redux";

function Counter(props){
  return(
    <div>
    <h1>I am a Counter!</h1>
    <p>Count : {props.count}</p>
    <button onClick={props.onIncrementClick}>Increment</button>
    <button onClick={props.onDecrementtClick}>Decrement</button>

    </div>
  )
}

function mapStateToProps(state){
  console.log("mapStateToProps",state);
  return{
    count: state.count
  }
}

function mapDispatchToProps(dispatch){
  console.log('mapDispatchToProps ');
  return{
    onIncrementClick: () => {
      const action = { type: 'Increment'};
      dispatch(action);
    },
    onDecrementtClick: () => {
      const action = { type: 'Decrement'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
