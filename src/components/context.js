import React,{createContext} from 'react';

const LoginPage = createContext();

export const LoginProvider = ({children}) => {
  return (
     <LoginPage.Provider>
        {children}
     </LoginPage.Provider>    
  )
}