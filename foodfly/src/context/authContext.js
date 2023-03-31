import { createContext } from "react";
import { useState, useEffect } from "react";

import { authServiceBuilder } from "./services/userService";

export const AuthContext = createContext();

export function  AuthProvider({ children }){
    const [auth, setAuth] = useState({});
    const authService = authServiceBuilder(auth.accessToken);

    const onSubmitRegister = async (data) => {
        const { repeatPassword, ...registerData } = data;
        if (repeatPassword !== registerData.password) {
            return;
        }
        console.log(registerData)
    
        try {
            const result = await authService.register(registerData);
    
            setAuth(result);
    
            navigate('/');
        } catch (error) {
            console.log(error);
        }
      };

    const onSubmitLogin = async (data) => {

        // let validation = validateValues(data)
        // if(validation.length==0){  
          try {
          let result = await authService.login(data);
          setAuth(result);
          navigate('/');
    
        } catch (err) {
           alert(err);
        }
    // }else {
      //     console.log('All filds are required')
      //   }
      
      };
      
  const onLogout= async () =>{
    await authService.logout();
    setAuth({})
 }
    
  const context = {
    onSubmitRegister,
    onSubmitLogin,
    onLogout,
    token: auth.accessToken,
    userId: auth._id,
    userUsername: auth.username,
    isAuth: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={context}>
        {children}
        </AuthContext.Provider>
    </>
  )
}