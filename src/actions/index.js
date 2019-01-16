export const Saveform=(fname,lname,email,phone,gender,dept,errmessage)=>
{
return{
    type:'SAVE_FORM',
    payload:{
        fname:fname,
        lname:lname,
        email:email,
        phone:phone,
        gender:gender,
        dept:dept,
        errmessage:errmessage
    }
}
}


export const Cancelform=()=>
{

}