export default [
    {
        id:'first_name',
        type: 'text',
        labelName: 'First Name',
        errormessage:'First Name is required!',
        showRequired: true
    }, 
    {
        id:'middle_name',
        type: 'text',
        labelName: 'Middle Name',
        errormessage:'Middle Name is required!',
        showRequired: true
    }, 
    {
        id:'last_name',
        type: 'text',
        labelName: 'Last Name',
        errormessage:'Last Name is required!',
        showRequired: true
    }, 
    {
        id:'suffix',
        type: 'text',
        labelName: 'Suffix',
        showRequired: false
    }, 
    {
        id:'date_of_birth',
        type:'date',
        labelName: "Date of Birth",
        errormessage: "Birthday is required!",
        showRequired: true
    }
]