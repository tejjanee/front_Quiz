import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducer/auth-reducer";

const initialState = {
    username: "",
    password: "",
    email:"",
    number:"",
    
    accessToken:"",
    confirmPassword:"",
}

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    useEffect(() => {
        const token = localStorage.getItem("token");
        authDispatch({
            type: "INITIAL_STATE",
            payload: token
        })
    }, [])

    const [{ username, password, email, confirmPassword, number,accessToken }, authDispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ username, password, email, confirmPassword, number,accessToken, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
    
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }