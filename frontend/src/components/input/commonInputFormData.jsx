export default [
    {
        id:'user_name',
        type: 'text',
        labelName: 'User Name',
        showRequired: true,
        errormessage:'User Name is required!'
    }, 
    {
        id:'email',
        type: 'text',
        labelName: 'Email',
        showRequired: true,
        errormessage:'Email is required!'
    }, 
    {
        id:'password',
        type: 'password',
        labelName: 'Password',
        showRequired: true,
        errormessage:'Password is required!'
    }, 
    {
        id:'confirmpassword',
        type: 'password',
        labelName: 'Confirm Password',
        showRequired: true,
        errormessage:'Confirm Password is required!'
    }, 
    {
        id:'contactnumber',
        type:'number',
        labelName: "Contact Number",
        showRequired: false
    }
]