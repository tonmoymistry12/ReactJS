const loginReducerDefaultState = [];
 
export default (state = loginReducerDefaultState, action) => {
    switch (action.type) {
        case 'LOGIN_PASSWORD':
            return [
                ...state,
                action.login
            ];
        default:
            return state;
    }
};