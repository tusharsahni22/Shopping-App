import React,{useState}from 'react'
import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';
// import { FcGoogle } from 'react-icons/fc';
// import { BsFacebook } from 'react-icons/bs';
import { login } from '../Services/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  z-index: 999;
`;
const LoginForm = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 480px;
  height: 550px;
  display: flex;
  flex-direction: column;
  outline: 1px solid black;
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
// const FancyButton = styled.div`
//   margin-bottom: 30px;
//   padding-top: 15px;
//   border-radius: 5px;
//   border: none;
//   outline: 1px solid #ccc;
//   color: black;
//   width: 100%;
//   cursor: pointer;
//   height: 40px;
//   text-align: center;
//   display: flex;
//   justify-content: center;
// `;

const Span = styled.span`
font-weight: bold;
color: #212121;
&:hover{
  cursor: pointer;
  color: gray;
}
`;

const Close = styled(IoCloseOutline)`

`;
// const Facebook = styled(BsFacebook)`
// margin-right: 5px;

// `;
// const Google = styled(FcGoogle)`
// margin-right: 5px;
// `;
const Already = styled.div`
text-align: center;
`;

function Login({SwitchLogin,toggleLogin}) {
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");

  const clearForm = () => {
    setEmail("");
    setPassword("");
  }


  const handleLogin = () => {
   const data = {email,password};
    login(data).then((res)=>{
      console.log(res);
      if(res.status === 200){
      localStorage.setItem("token",res.data.token);
      toast.success("Login Successfull");
    // clear the states 
    clearForm()
    // close the window
    toggleLogin();
    }
    else{
      toast.error("Invalid Credentials");
      clearForm()
    }
    }).catch((err)=>{
      console.log(err);
    })
   };

  return (
    <Overlay>
    <LoginForm>
      <ToastContainer/>
        <Header>
                <div></div>
                <Text>Welcome Back! Log In</Text>
                <Close onClick={()=>{toggleLogin()}}/> 
            </Header>
            <Field>
            <Email>Email</Email>
            <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
            <Password>Password</Password>
            <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
            </Field>
            <Field>
            <Button onClick={handleLogin}>Log In</Button>
            <Line/>
            {/* <FancyButton><Google/>Continue with Google</FancyButton>
            <FancyButton><Facebook/>Continue with Facebook</FancyButton> */}
            </Field>
            <Already>Already have an account? <Span onClick={()=>{SwitchLogin()}}>Sign Up</Span></Already>
      </LoginForm>
      </Overlay>
  )
}

export default Login