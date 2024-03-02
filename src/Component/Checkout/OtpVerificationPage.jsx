import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpInput from "react-otp-input";
import { otpgenration, otpverification } from "../Services/Checkout";

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

// const Input = styled.input`
//   margin-bottom: 30px;
//   padding: 10px;
//   border-radius: 5px;
//   width: 100%;
//   border: 1px solid #ccc;
// `;

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
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
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

const Span = styled.span`
  font-weight: bold;
  color: #212121;
  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

const Close = styled(IoCloseOutline)``;
const Already = styled.div`
  text-align: center;
`;

const InputCode = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Lable = styled.div`
  color: green;
  margin: 10px 0;
  text-align: center;
`;

function OtpVerificationPage(props) {
  const [otp, setOtp] = useState("");

  const clearForm = () => {
    setOtp("");
    props.setOtpPage(false)
  };

  useEffect(() => {
    const data = { phone: props.mobile }
    console.log("first", data)
    otpgenration(data).then((res) => {
      if(res.status === 200){
        console.log("otp sent")
      }})
  }, []);

  const handleSubmit=()=>{
    const data = { phone: props.mobile, otp }
    console.log("first", data)
    otpverification(data).then((res) => {
      if(res.status === 200){
        clearForm()
        toast.success("otp verfied successfully")
        console.log("otp verfied successfully")
      }})
  }
  
  return (
    <Overlay>
      <LoginForm>
        <ToastContainer />
        <Header>
          <div></div>
          <Text>Otp Verification </Text>
          <Close onClick={()=>{props.setOtpPage(false)}}/>
        </Header>
        <Lable>please enter the otp sent on your {props.mobile}</Lable>
        <Field>
          <InputCode>
            <OtpInput
              value={otp}
              onChange={(value) => setOtp(value)}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
          </InputCode>
        </Field>
        <Field>
          <Button onClick={handleSubmit}>Submit</Button>
          <Line />
        </Field>
        <Already>
          Didn&apos;t received otp? <Span>Resend</Span>
        </Already>
      </LoginForm>
    </Overlay>
  );
}

export default OtpVerificationPage;
