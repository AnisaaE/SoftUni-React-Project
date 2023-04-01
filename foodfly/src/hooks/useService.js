import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useService = (serviceFactoy)=>{
    const {token} = useContext(AuthContext)
    const service = serviceFactoy(token)

    return service   
}