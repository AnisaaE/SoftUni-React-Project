import { createContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceBuilder } from "../services/userService";


export const AuthContext = createContext();

export function  AuthProvider({ children }){
  const navigate = useNavigate();


    const [auth, setAuth] = useState({});
    const authService = authServiceBuilder(auth.accessToken);

    const onSubmitRegister = async (data) => {
        const { repeatPassword, ...registerData } = data;
        if (repeatPassword !== registerData.password) {
          return ["Passwords doesn't match!"]
        }
        if (repeatPassword.length <4){
          return['Passwords should be more than 4 characters!']
        }
        try {
            const result = await authService.register(registerData);
    
            setAuth(result);
    
            navigate('/');
        } catch (error) {
            return['There is a problem...'];
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
          return [err.message];
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