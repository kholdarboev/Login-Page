import styled from 'styled-components'
import {ChevronLeft} from '@styled-icons/boxicons-regular/ChevronLeft';
import {User} from '@styled-icons/fa-regular/User';
import {Lock} from '@styled-icons/boxicons-regular/Lock';
import DarkMode from 'react-dark-mode-toggle'



export const Main =  styled.div`
display: flex;
position: relative;
flex-direction:column;
justify-content: center;
align-items: center;
height:70vh;

`
export const Container = styled.div`
background:${({color})=>color};
width:450px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`

export const Icon = styled.div`
`

Icon.ChevronLeft = styled(ChevronLeft)`
color:${({color})=>color};
width:50px;
height:50px;
cursor: pointer;
margin-top:10px;
` 




export const TitleWrapper = styled.div`
padding:30px 60px 50px; 
`
export const Title = styled.h2`
color:${({color})=>color};

` 
export const TitleDesc = styled.div`
font-size:18px;
color:${({color})=>color};
padding-bottom:80px;
` 

export const LoginWrapper = styled.div`
width:450px;
position: absolute;
background:${({color})=>color};
bottom:-140px;
border-top-right-radius:50px;
border-top-left-radius:50px;
padding:50px 60px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
export const ModeWrapper = styled.div`
display: flex;
` 
export const Toggle = styled(DarkMode)`
margin-left:auto;
`

export const LoginTitle = styled.div`
font-weight:500;
color:${({color})=>color};
`

export const InputWrapper = styled.div`
display:flex;
flex-direction:column;
margin-top:50px;
`



export const UserInputWrapper = styled.div`
display: flex;
position: relative;
width:100%;
`
export const UserInput = styled.input`
margin-bottom:10px;
outline:none;
width:100%;
background-color:#E9E9E9;
border-radius:50px;
border:none;
padding:14px;

`
Icon.User = styled(User)`
width:15px;
height:15px;
cursor: pointer;
position: absolute;
top:15px;
right:13px;
`
Icon.Lock = styled(Lock)`
width:15px;
height:15px;
cursor: pointer;
position: absolute;
top:15px;
right:13px;
`

export const Remember = styled.div`
margin-top:10px;
font-size:14px;
font-weight:400;
color:${({color})=>color};
`
export const SignupWrapper = styled.div`
display: flex;
align-items: center;
margin-top:20px;
`
export const Help = styled.div`
font-weight:700;
color:${({color})=>color};


`
export const SignIn = styled.button`
padding:12px 40px;
border-radius:50px;
border:none;
cursor:pointer;
margin-left: auto;
background:${({color})=>color};
color:white;

`

export const Register = styled.div`
margin-top:80px;
display: flex;
`
export const RegisterTitle = styled.div`
color:${({color})=>color};

`
export const RegisterLink = styled.div`
color:${({color})=>color};
font-weight:700;
margin-left:5px;
cursor:pointer;
`