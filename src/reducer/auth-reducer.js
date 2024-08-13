export const authReducer = (state, {type, payload}) => {
    switch (type){

        case "INITIAL_STATE":
            return {
                ...state,
                accessToken: payload
            }

        case "USERNAME":
            return {
                ...state,
                username: payload
            }
        case "PASSWORD":
            return {
                ...state,
                password: payload
            }
            case "EMAIL":
            return {
                ...state,
               email: payload
            }
            case "NUMBER":
            return {
                ...state,
                number: payload
            }
            case "CONFIRMPASSWORD":
            return {
                ...state,
                confirmPassword: payload
            }
            case "CLEAR_USER_DATA":
                return {
                  ...state,
                  username: "",
                    number: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                };
        case "CLEAR_CREDENTIALS":
            return {
                ...state,
                username: "",
                password: ""
            }
            case "SET_ACCESS_TOKEN":
                return {
                  ...state,
                  accessToken: payload,
                };
        default:
            return state
    }
}