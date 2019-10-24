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
        
 
        return axios({
            url: 'http://localhost:8081/auth?ts=1571936819267',
            method: 'post',
            headers: {
                'X-Auth-Password': loginData.password,
                'X-Auth-Username':loginData.userName,
                'Content-Type': 'application/json'
            }
         })
        // .then(result => {
        //     dispatch(_signin(result.data));
            
        // });
    };
};
 


 
