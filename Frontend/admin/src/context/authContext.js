import { createContext, useContext, useState, useEffect } from "react";
import { addUser, loginUser, logOutUser } from "../firabase/configFirabse";
// import {
//   onAuthStateChanged,
// } from "firebase/auth";

// export const isLoginUserFB = async () => {
//   await onAuthStateChanged(auth, currentUser=>{
//     console.log(currentUser.accessToken);
//     return currentUser.accessToken;
//   });
// };


export const contextAuth = createContext();

export const useAuth = () => {
  const authUserContext = useContext(contextAuth);
  if (!authUserContext) throw new Error("esto na va bien no hay usuario");
  return authUserContext;
};

export const AuthProvider = ({ children }) => {
  // const [isLogin, setIsLogin] = useState(null);

  const signUp = (email, password) => {
    console.log("signUp authcontex");
    return addUser(email, password);
  };

  const login = (email, password) => {
    console.log("login authcontexxt", email, password);
    return loginUser(email, password);
  };

  const logout= (email, password) => {
    console.log("logout authcontexxt", email, password);
    return logOutUser(email, password);
  };
 

  // const isLoginUser = ()=>{
  //   isLoginUserFB()
  // }
  // const isLoginFunAsync = () => {
  //   useEffect(() => {
  //     console.log("useEfect is loginuser");
  //     isLoginUserFB();
  //     setIsLogin(isLoginUserFB());
  //     console.log("islogin", isLogin);
  //     console.log("isLoginUserFB", isLoginUserFB());
  //   }, []);
  // };

  return (
    <contextAuth.Provider value={{ signUp, login, logout  }}>
      {children}
    </contextAuth.Provider>
  );
};
