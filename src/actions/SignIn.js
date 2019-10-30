import axios from 'axios';
import axiosInstance from '../axios/axios';
import { sha256, sha224 } from 'js-sha256';
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
        
 
       
        return axiosInstance({
            url: 'http://localhost:8081/auth?ts=1571936819267',
            method: 'post',
            headers: {
                
                'X-Auth-Password': sha256(loginData.password),
                'X-Auth-Username':loginData.userName,
                'Content-Type': 'application/json'
            }
         })

        //return axios.post('https://reqres.in/api/login', login)
        // .then(result => {
        //     dispatch(_signin(result.data));
            
        // });
    };
};
 


 
