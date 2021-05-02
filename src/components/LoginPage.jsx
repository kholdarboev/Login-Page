import React from 'react'
import {
    Main, Container, Icon, TitleWrapper, Title, TitleDesc,
    LoginWrapper, LoginTitle, InputWrapper, UserInputWrapper,
    UserInput, Remember, SignupWrapper, Help, SignIn, Register, RegisterTitle, RegisterLink
} from './style';


const LoginPage = () => {




    return (
        <Main>
            <Container>
                <Icon.ChevronLeft />
                <TitleWrapper>
                    <Title>Welcome Back</Title>
                    <TitleDesc>We missed you? Login to get Started</TitleDesc>
                </TitleWrapper>
            </Container>
            <LoginWrapper>
                <LoginTitle>LOGIN</LoginTitle>
                <InputWrapper>
                    <UserInputWrapper>
                        <UserInput />
                        <Icon.User />
                    </UserInputWrapper>
                    <UserInputWrapper>
                        <UserInput />
                        <Icon.Lock />
                    </UserInputWrapper>
                    <Remember>
                        <input type='checkbox' /> <span>Remember Me</span>
                    </Remember>
                    <SignupWrapper>
                        <Help>Need Help?</Help>
                        <SignIn>Sign In</SignIn>
                    </SignupWrapper>
                    <Register>
                        <RegisterTitle>Don't have an account?</RegisterTitle>
                        <RegisterLink>Register</RegisterLink>
                    </Register>
                </InputWrapper>

            </LoginWrapper>
        </Main>
    )
}

export default LoginPage;