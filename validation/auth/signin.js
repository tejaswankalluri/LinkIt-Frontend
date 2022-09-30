import * as Yup from 'yup';

const signinValidator = Yup.object({
    email: Yup.string().email('Invaild Email address').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character',
        ),
});
export { signinValidator };
