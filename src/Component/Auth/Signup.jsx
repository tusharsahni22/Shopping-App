import React from 'react';
import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';
// import { FcGoogle } from 'react-icons/fc';
// import { BsFacebook } from 'react-icons/bs';
import { Signup } from '../Services/auth';
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from 'react-toastify';
import { otpgenration,otpverification } from '../Services/Checkout';


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

const SignupForm = styled.form`
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
const Name = styled.div``;
const Mobile = styled.div``;
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
const Span = styled.span`
font-weight: bold;
color: #212121;
&:hover{
  cursor: pointer;
  color: gray;
}
`;
const InputCode = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 105%;
`;

function SignupPage({toggleLogin,SwitchLogin}) {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [isOTPVerified, setIsOTPVerified] = React.useState(false);
  
  const clearForm = () => {
    setEmail("");
    setPassword("");
  }
  const handleOTPSend = () => {
    if(mobile.length === 10){
      otpgenration({phone:mobile}).then((res)=>{
        if(res.status === 200){
      
      toast.success("OTP sent successfully");
      }}).catch((err)=>{
        toast.error("Error whilw sending OTP");
        console.log("error while sending otp",err)
      })
    }
    else{
      toast.error("Enter a valid mobile number");
    }
  }

  const checkOTP = (value) => {
    console.log("first",value)
    otpverification({phone:mobile,"otp":value}).then((res)=>{
      if(res.status === 200){
        setIsOTPVerified(true);
        toast.success("OTP verified successfully");
      }
      else{
        toast.error("OTP verification failed");
      }
    }).catch((err)=>{
      console.log("error while verifying otp",err);
    })
  }


  const handleSignup = () => {
    const data = {email,password,name,phoneNo:mobile};
    Signup(data).then((res)=>{
      if(res.status === 200){
        alert("Signup Successful");
        toast.success("Signup Successful");
        // clear the form
        clearForm()
        // move to login
        SwitchLogin();
      }
      else if(res.status === 400){
        toast.error("credentials already exists");
        clearForm()
      }
    }).catch((err)=>{
      console.log(err);
    })
  }
   
  return (
    <Overlay>
      <SignupForm>
        <ToastContainer/>
      <Header>
            <div></div>
            <Text>Sign Up Now!</Text>
            <Close onClick={()=>{toggleLogin()}}/> 
        </Header>
        <Field>
        <Name>Name</Name>
        <Input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" />
        <Email>Email</Email>
        <Input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
        <Password>Password</Password>
        <Input  value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
        <Mobile>Mobile</Mobile>
        <Input value={mobile} onChange={(e)=>{setMobile(e.target.value)}} type="number" placeholder="Mobile" />
        {isOTPVerified?"":<InputCode>
        <OtpInput
              value={otp}
              onChange={(value) => {setOtp(value)
                if (value.length === 6) {
                  checkOTP(value);
                }
              }}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
            <div onClick={handleOTPSend}>Send OTP</div>
        </InputCode>}
        </Field>
        <Field>

        
        {isOTPVerified?<Button onClick={handleSignup}>Sign Up</Button>:""}
        <Line/>
        {/* <FancyButton><Google/>Continue with Google</FancyButton> */}
        {/* <FancyButton><Facebook/>Continue with Facebook</FancyButton> */}
        </Field>
        <Already>Already have an account? <Span onClick={()=>{SwitchLogin()}}>Log In</Span></Already>
       
      </SignupForm>
    </Overlay>
  );
}

export default SignupPage;