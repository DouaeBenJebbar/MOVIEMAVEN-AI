import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins';
    background-color: #121212;
  }
`;

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px 8%;
`;

const Container = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${({ signinIn }) =>
    signinIn !== true &&
    `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${({ signinIn }) => signinIn !== true && `transform: translateX(100%);`}
`;

const Form = styled.form`
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  color: #e5e5e5;
`;

const Input = styled.input`
  background-color: #333;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  color: #e5e5e5;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #e50914;
  background-color: #e50914;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

const Anchor = styled.a`
  color: #e5e5e5;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${({ signinIn }) => signinIn !== true && `transform: translateX(-100%);`}
`;

const Overlay = styled.div`
  background: #e50914;
  background: -webkit-linear-gradient(to right, #e50914, #e50914);
  background: linear-gradient(to right, #e50914, #e50914);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ signinIn }) => signinIn !== true && `transform: translateX(50%);`}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${({ signinIn }) => signinIn !== true && `transform: translateX(0);`}
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${({ signinIn }) => signinIn !== true && `transform: translateX(20%);`}
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: #e5e5e5;
`;

const Login = () => {
  const [signIn, toggle] = React.useState(true);

  return (
    <>
      <GlobalStyles />
      <LoginPageContainer>
        <Container>
          <SignUpContainer signinIn={signIn}>
            <Form>
              <Title>Create Account</Title>
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button>Sign Up</Button>
            </Form>
          </SignUpContainer>

          <SignInContainer signinIn={signIn}>
            <Form>
              <Title>Sign in</Title>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button>Sign In</Button>
            </Form>
          </SignInContainer>

          <OverlayContainer signinIn={signIn}>
            <Overlay signinIn={signIn}>
              <LeftOverlayPanel signinIn={signIn}>
                <Title>Welcome Back!</Title>
                <Paragraph>
                  To keep connected with us please login with your personal info
                </Paragraph>
                <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
              </LeftOverlayPanel>

              <RightOverlayPanel signinIn={signIn}>
                <Title>Join the Movie Enthusiasts!</Title>
                <Paragraph>
                  Enter your personal details and start your journey with us
                </Paragraph>
                <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
              </RightOverlayPanel>
            </Overlay>
          </OverlayContainer>
        </Container>
      </LoginPageContainer>
    </>
  );
};

export default Login;