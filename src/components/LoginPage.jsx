import React, { useState, useContext } from 'react'
import { LoginTheme } from './context'
import {
    Main, Container, Icon, TitleWrapper, ModeWrapper, Toggle, Title, TitleDesc,
    LoginWrapper, LoginTitle, InputWrapper, UserInputWrapper,
    UserInput, Remember, SignupWrapper, Help, SignIn, Register, RegisterTitle, RegisterLink
} from './style';


const LoginPage = () => {
    const [toggle, setToggle] = useState(false)
    const [theme, setTheme] = useContext(LoginTheme)



    const dark = {
        back: 'rgba(52, 104, 249, 1)',
        title: 'white',
        button: 'rgba(52, 104, 249, 1)',
        background: 'white',
        icon: 'white',
        login: '#ffffff',
        title_link: 'black'
    }
    const light = {
        back: 'black',
        title: 'white',
        button: 'rgba(183, 139, 244, 1)',
        background: 'black',
        icon: 'white',
        login: '#242424',
        title_link: 'white'
    }


    const onChange = () => {
        setToggle(!toggle)
        setTheme(toggle ? dark : light)
    }



    return (
        <Main>
            <Container color={theme.back}>
                <Icon.ChevronLeft color={theme.icon} />
                <TitleWrapper>
                    <Title color={theme.title}>Welcome Back</Title>
                    <TitleDesc color={theme.title}>We missed you? Login to get Started</TitleDesc>
                </TitleWrapper>
            </Container>
            <LoginWrapper color={theme.login}>
                <ModeWrapper>
                    <LoginTitle color={theme.title_link}>LOGIN</LoginTitle>
                    <Toggle
                        onChange={onChange}
                        checked={toggle}
                        size={45}
                    />
                </ModeWrapper>
                <InputWrapper>
                    <UserInputWrapper>
                        <UserInput placeholder='email' type='email' />
                        <Icon.User />
                    </UserInputWrapper>
                    <UserInputWrapper>
                        <UserInput placeholder='password' type='password' />
                        <Icon.Lock />
                    </UserInputWrapper>
                    <Remember color={theme.title_link}>
                        <input type='checkbox' />
                        <span style={{ marginLeft: '10px' }} >Remember Me</span>
                    </Remember>
                    <SignupWrapper  >
                        <Help color={theme.title_link}>Need Help?</Help>
                        <SignIn color={theme.button}>Sign In</SignIn>
                    </SignupWrapper>
                    <Register>
                        <RegisterTitle color={theme.title_link}>Don't have an account?</RegisterTitle>
                        <RegisterLink color={theme.button}>Register instead</RegisterLink>
                    </Register>
                </InputWrapper>

            </LoginWrapper>
        </Main>
    )
}

export default LoginPage;