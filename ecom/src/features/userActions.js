import { publicRequest } from "../app/makeRequest"
import { loginFailure, loginStart, loginSuccess } from "./userSlice"


export const login =async(dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/login',user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure)
    }
} 

export const register =async(dispatch,user)=>{
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/register',user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure)
    }
} 