import React from "react"
import {combineReducers} from "redux";


const formsaved=(state=[],action)=>
{
    
    if(action.type==='SAVE_FORM')
    {
return[...state,
{
    fname:action.payload.fname,
        lname:action.payload.lname,
        email:action.payload.email,
        phone:action.payload.phone,
        gender:action.payload.gender,
        dept:action.payload.dept
}];
}
return state;
}

const cancelform=(olddata=[])=>
{
return olddata;
}
export default combineReducers({
    formsaved:formsaved,
    cancelform:cancelform
})