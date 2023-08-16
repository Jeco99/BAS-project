export default [
    {
        id:'firstname',
        type: 'text',
        labelName: 'First Name',
        errormessage:'First Name is required!',
        showRequired: true
    }, 
    {
        id:'middlename',
        type: 'text',
        labelName: 'Middle Name',
        errormessage:'Middle Name is required!',
        showRequired: true
    }, 
    {
        id:'lastname',
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
        id:'dateofbirth',
        type:'date',
        labelName: "Date of Birth",
        errormessage: "Birthday is required!",
        showRequired: true
    },
    {
        id:'contactnumber',
        type:'number',
        labelName: "Contact Number",
        showRequired: false
    }
]