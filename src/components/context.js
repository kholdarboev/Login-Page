import React,{useState,createContext} from 'react';

export const LoginTheme= createContext();

export const Mode = ({children}) => {
   const [mode,setMode] = useState({
      button:'blue',
      title:'black',
      background:'white'
   })
  return (
     <LoginTheme.Provider value={[mode,setMode]}>
        {children}
     </LoginTheme.Provider>    
  )
}
export default Mode