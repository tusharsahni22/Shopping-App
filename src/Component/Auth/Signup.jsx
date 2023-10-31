import React from 'react';
import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 480px;
  height: 550px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #ccc;
`;

const Button = styled.div`
    margin-bottom: 30px;
  padding-top: 15px;
  border-radius: 5px;
  border: none;
  background-color: #212121;
  color: #fff;
  width: 100%;
  cursor: pointer;
  height: 40px;
  text-align: center;
`;
const Header = styled.div`
display : flex;
justify-content: space-between;
margin: 20px 0;
`
const Text = styled.div`
font-size: 24px;
font-weight: bold;
`;
const Email = styled.div`

`;
const Password = styled.div`

`;
const Field = styled.div`
display: block;
padding: 0 15%;
`;
const Line = styled.div`
height: 1px;
background-color: black;
margin-bottom: 30px;
`;
const FancyButton = styled.div`
  margin-bottom: 30px;
  padding-top: 15px;
  border-radius: 5px;
  border: none;
  outline: 1px solid #ccc;
  color: black;
  width: 100%;
  cursor: pointer;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
`;


const Close = styled(IoCloseOutline)`

`;
const Facebook = styled(BsFacebook)`
margin-right: 5px;

`;
const Google = styled(FcGoogle)`
margin-right: 5px;
`;
const Already = styled.div`
text-align: center;
`;
const Span = styled.span`
font-weight: bold;
color: #212121;
&:hover{
  cursor: pointer;
  color: gray;
}
`;

function SignupPage({toggleSignup,SwitchLogin}) {
   
  return (
    <Overlay>
      <SignupForm>
      <Header>
            <div></div>
            <Text>Sign Up Now!</Text>
            <Close onClick={()=>{toggleSignup()}}/> 
        </Header>
        <Field>
        <Email>Email</Email>
        <Input type="email" placeholder="Email" />
        <Password>Password</Password>
        <Input type="password" placeholder="Password" />
        </Field>
        <Field>

        
        <Button>Sign Up</Button>
        <Line/>
        <FancyButton><Google/>Continue with Google</FancyButton>
        <FancyButton><Facebook/>Continue with Facebook</FancyButton>
        </Field>
        <Already>Already have an account? <Span onClick={()=>{SwitchLogin()}}>Log In</Span></Already>
       
      </SignupForm>
    </Overlay>
  );
}

export default SignupPage;