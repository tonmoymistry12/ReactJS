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
    
    return (dispatch, getState) => {

        return axiosInstance({
            url: 'http://localhost:8081/auth?ts=1571936819267',
            method: 'post',
            data:{},
            headers: {

                'X-Auth-Password': sha256(loginData.password),
                'X-Auth-Username':loginData.userName,
                'Content-Type': 'application/json'
            }
         }).then(result => {
            
            let objectName = {
                headers : result.headers
            }
            let mergedData = {...result.data, ...objectName};
            dispatch(_signin(mergedData));
            console.log(getState());
            
        });
        
    };
};
 
const _emailCheck = (emailData) => ({
    type: 'EMAIL_CHECK',
    emailData 
});

export const emailCheck = (emailData = { email: ''}) =>{        
    return () => {
       const email = {
          email : emailData
       }
       
       return axiosInstance({
           url: 'http://localhost:8081/config/users/login/otp?ts=1574251421914',
           method: 'post',
           data: email
          
        }).then(result => {
         return result;
            
        });
        
   };
}

const _otpCheck = (data) => ({
    type: 'OTP_CHECK',
    data 
});

export const otpCheck = (otpData = {}) =>{
    return (dispatch,getState) => {
        let store = getState();
        const data = {
            temporaryPassword:otpData.otp,
            userId:store[0].usersAuthoritiesPermissionsDto.userId,
            isForgotPasswordLinkClicked:false,
            email:otpData.userName
       }
       return axiosInstance({
           url: 'http://localhost:8081/config/users/password?ts=1572599540547',
           method: 'put',
           data:data
        })
       
   };
}
 
