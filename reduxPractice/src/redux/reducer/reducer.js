const reducer = (state ={a : "" , b : ""} ,action) =>{

    if(action.type == "A data")
    {
        state = {... action, a : action.payload};
    }
    if(action.type == "B data")
    {
        state = {... action, b : action.payload};
    }
}

export default reducer;