import { createContext, useContext } from "react";
import { addUser,  loginUser,isLoginUserFB } from "../firabase/configFirabse";

export const contextAuth = createContext();

export const useAuth = () => {
  const authUserContext = useContext(contextAuth);
  if (!authUserContext) throw new Error("esto na va bien no hay usuario");
  return authUserContext;
};

export const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    console.log("signUp authcontex");
    return addUser(email, password);
  };

  const login = (email, password) => {
    console.log("authcontexxt",email,password);
    return loginUser(email, password);
  };

  const isLoginUser = ()=>{
    isLoginUserFB()
  }
 
  return (
    <contextAuth.Provider value={{signUp, login, isLoginUser }}>{children}</contextAuth.Provider>
  );
};


