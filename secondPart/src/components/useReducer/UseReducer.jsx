import React,{useReducer} from 'react';

const ReducerFunction = (state , action)=>{
    var NewState;
    if(action.type === "add")NewState = state+action.value;
    else if(action.type === "multiply")NewState = state*action.value;
    else if(action.type === "divide")NewState = state/action.value;
    
    return NewState;
}

const UseReducer = () => {
    let [state , dispatch] = useReducer(ReducerFunction , 0);
  return (
    <div>
       {/* <button onClick={()=>{dispatch(1)}}>Increement by 1</button> 
       <button onClick={()=>{dispatch(3)}}>Increement by 3</button>  */}
       <button onClick={()=>{dispatch({type : "add",value:1})}}>Increement by 1</button> 
       <button onClick={()=>{dispatch({type : "add",value:3})}}>Increement by 3</button> 
       <button onClick={()=>{dispatch({type : "multiply",value:4})}}>Multiply with 4</button> 
       <button onClick={()=>{dispatch({type : "divide",value:3})}}>divide by 3</button> 
       <h1>{state}</h1>
    </div>
  )
}

export default UseReducer