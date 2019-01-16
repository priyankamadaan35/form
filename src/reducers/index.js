export const formsaved=(state=[],action)=>
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
        dept:action.payload.dept,
        errmessage:action.payload.errmessage
}];
}
return state;
if(action.type==='CANCEL_FORM')
{
    return[...state,{
        fname:"",
        lname:"",
        email:"",
        phone:"",
        gender:"",
        dept:"",
        errmessage:"enter values"
    }]
}
}


