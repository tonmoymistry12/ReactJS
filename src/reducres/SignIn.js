//const loginReducerDefaultState = [];
 
export default (state, action) => {
    debugger;
    switch (action.type) {
       
        case 'LOGIN_PASSWORD':
            return [
                ...state,
                action.login
            ];
        case 'EMAIL_CHECK':
                return [
                    ...state,
                    action.emailData
                ];     
        case 'OTP_CHECK':
                return [
                    ...state,
                    action.otpCheck
                ];   
        default:
            return state;
    }
};