
export const signUpFormControls = [
    {
        name : 'userName',
        label : 'User Name',
        Placeholder : 'Enter Your User Name',
        type : 'text',
        componentType : 'input' 
    },
    {
        name : 'userEmail',
        label : 'User email',
        Placeholder : 'Enter Your User Email',
        type : 'email',
        componentType : 'input'
    },{
        name : 'password',
        label : 'Password',
        Placeholder : 'Enter Your Password',
        type : 'password',
        componentType : 'input'
    }
];

export const signInFormControls = [

    {
        name : 'userEmail',
        label : 'User email',
        Placeholder : 'Enter Your User Email',
        type : 'email',
        componentType : 'input'
    },{
        name : 'password',
        label : 'Password',
        Placeholder : 'Enter Your Password',
        type : 'password',
        componentType : 'input'
    }
];

export const initialSignInFormData = {
    userEmail : "",
    password : "",
};

export const initialSignUpFormData = {
    userName : "",
    userEmail : "",
    password : "",
};