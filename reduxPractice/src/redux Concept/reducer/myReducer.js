const myReducer = (state = " Initial data" , action) =>{
    // var newState
    // console.log(action);
    // newState = action.data;
    // return newState;
    
    // We're gonna return undefined as the Intial data will be replaced by action.data and there's nothing in action.data yet as initially Redux will call the component but not dispatch
    // state = action.data;
    // return state;

    
    if(action.type === "Input")
    {
        state = action.payload;
    }
    return state;
}

export default myReducer;