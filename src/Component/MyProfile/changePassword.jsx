import React,{useState} from 'react'
import styled from 'styled-components'
import Avatar from  "./avatar"
import { TbLockUp } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import { changePassword } from '../Services/profile';
const Wrapper = styled.div`
width: 100%;
`;
const Card = styled.div`
padding: 50px 25%;
box-shadow: 0 2px 10px #0000001f;
border-radius: 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Welcome = styled.div`
font-size: 30px;
color: var(--contentTextColor);
font-weight: 400;
letter-spacing: 0.025em;
color: #000000;
margin-top: 15px;
margin-bottom: 30px;
width: 100%;
text-align: center;

`;
const AvatarDiv = styled.div`
position: relative;
width: 100%;
align-items: center;
display: flex;
justify-content: center;
bottom: -32px;
@media (min-width:767px){
  display:none;
}
`;


const LockIcon = styled(TbLockUp)`
font-size: 50px;
align-self: center;
`;
const Title = styled.div`
font-size: 20px;
font-weight: 400;
letter-spacing: 0.025em;
border: none;
background-color: transparent;
text-align: center;
margin-bottom: 5px;
`;

const Email = styled.div`
font-size: 15px;
font-weight: 400;
letter-spacing: 0.025em;
border: none;
background-color: transparent;
text-align: center;
margin-bottom: 30px;
`;
const TagName = styled.div`
text-transform: none;
letter-spacing: 0.025em;
font-size: 14px;
font-weight: 400;
border: none;
background-color: transparent;
align-self: flex-start;
margin-bottom: 10px;
color: black;
`;
const Input = styled.input`

width: -webkit-fill-available;
border-radius: 5px;
padding: 8px;
outline: 0;
cursor: text;
border: 1px solid;
text-align: left;
border-color: rgb(235, 240, 247);
font-size: 15px;
line-height: 1.2!important;
height: 18px;
font-weight: 400;
letter-spacing: 0.025em;
margin-bottom: 10px;
`;

const Button = styled.div`
background-color: black;
color: white;
width: 150px;
padding: 10px;
border-radius: 5px;
text-align: center;
align-self: center;
font-size: 15px;
font-weight: 400;
letter-spacing: 0.025em;
margin-top: 30px;
`;





function ChangePassword({name, greeting,email}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUpdatePassword = () => {
    if(password === '' || confirmPassword === ''){
      setError('Please enter password and confirm password')
      return;
    }
    if(password !== confirmPassword){
      setError('Password and confirm password do not match')
      return;
    }
    setError('');
    changePassword({password})
      .then((res) => {
        if(res.status === 200){
          toast.success('Password updated successfully')
          setPassword('')
          setConfirmPassword('')
        }
      })
      .catch(() => {
        toast.error('Error updating password')
      });
  }
  return (
    <Wrapper>
      <ToastContainer/>
      <Welcome> {greeting}! {name?.split(" ")[0]}</Welcome>
        <AvatarDiv><Avatar name={name}/></AvatarDiv>
        <Card>
        <LockIcon/>
        <Title>Update your Password for</Title>
        <Email>{email||"email"}</Email>
        <TagName>New Password</TagName>
        <Input type='password' placeholder='Enter New Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <TagName>Confirm New Password</TagName>
        <Input type='password' placeholder='Confirm New Password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        {error}
        <Button onClick={handleUpdatePassword}>Update Password</Button>
        </Card>
    </Wrapper>
  )
}

export default ChangePassword