import axios from 'axios';
 
const _signin = (login) => ({
    type: 'LOGIN_PASSWORD',
    login 
});
 
export const login = (loginData = {
    email: '',
    password: ''
}) => {
    
    return (dispatch) => {
        const login = {
            email: loginData.userName,
            password: loginData.password
        };
 
        return axios.post('https://reqres.in/api/users/2', login).then(result => {
            dispatch(_signin(result.data));
        });
    };
};
 


 
