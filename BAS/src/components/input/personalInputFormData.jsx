export default [
    {
        id:'firstname',
        formInput: true,
        type: 'text',
        labelName: 'First Name',
        errormessage:'First Name is required!',
        showRequired: true
    }, 
    {
        id:'middlename',
        formInput: true,
        type: 'text',
        labelName: 'Middle Name',
        errormessage:'Middle Name is required!',
        showRequired: true
    }, 
    {
        id:'lastname',
        formInput: true,
        type: 'text',
        labelName: 'Last Name',
        errormessage:'Last Name is required!',
        showRequired: true
    }, 
    {
        id:'Suffix',
        formInput: true,
        type: 'text',
        labelName: 'Suffix',
        showRequired: false
    }, 
    {
        id:'sex',
        formInput: false,
        type: 'text',
        labelName: 'Sex',
        errormessage:'Sex is required!',
        showRequired: true,
        optionData:[
            'Male', 'Female'
        ]
    }, 
]