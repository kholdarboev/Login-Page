import './App.css'  
import React,{useState} from 'react';
import LoginPage from './components/LoginPage'
import {Main} from './components/style'


const App = (props)=>{

  return(
    <Main>
          <LoginPage/>
    </Main>
  )
}

export default App;