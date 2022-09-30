import * as Yup from 'yup';
import axios from 'axios';
import keys from '../../config/env';

const signupValidator = Yup.object({
    email: Yup.string()
        .email('Invaild Email address')
        .required('Email is required')
        .test('unique email', 'Email already in use', function (value) {
            return new Promise((resolve, reject) => {
                axios
                    .post(`${keys.host}api/exist/email`, { email: value })
                    .then((res) => {
                        resolve(true);
                    })
                    .catch((error) => {
                        // if (error.response.data.content === 'Email already in use') {
                        //     resolve(false);
                        // } else resolve(false);
                        resolve(false);
                    });
            });
        }),
    username: Yup.string()
        .required('username is required')
        .matches(new RegExp(`^[A-Za-z][A-Za-z0-9_]{7,29}$`), 'must contain 8 Characters and only _ & . is allowed')
        .test('unique username', 'Username already in use', function (value) {
            return new Promise((resolve, reject) => {
                axios
                    .post(`${keys.host}api/exist/username`, { username: value })
                    .then((res) => {
                        resolve(true);
                    })
                    .catch((error) => {
                        // if (error.response.data.content === 'Email already in use') {
                        //     resolve(false);
                        // } else resolve(false);
                        resolve(false);
                    });
            });
        }),
    password: Yup.string()
        .required('Password is required')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Case Character',
        ),
    conpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('confirm password is required'),
});
export { signupValidator };
