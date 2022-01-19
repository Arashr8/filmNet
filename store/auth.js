import React , {createContext, useEffect, useState} from "react"
import axios from "axios"

const AuthContext = createContext()
const {Provider} = AuthContext

const AuthProvider = ({children}) => {
    const [authState , setAuthState] = useState({})

    useEffect(()=>{
        axios.get("/api/auth/user").then(res => {
            console.log(res)
            if(res.data.token){
                setAuthState({token:res.data.token})

            }
        }).catch(err => {
            console.log(err)
        })
    
    },[])

    const isAuthenticated = () => {
        if(authState.token){
            return true
        }else{
            return false
        }
    }
    
    return(
        <Provider
        value={{
            authState,
            isAuthenticated,
            setAuthNewState : (value) => setAuthState(value)
        }}
        >
        {children}
        </Provider>
    )
}

export {
    AuthProvider , AuthContext
}