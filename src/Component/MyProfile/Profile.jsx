import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getProfileInformation, updateProfileInformation } from '../Services/profile';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { doLogout } from '../Services/auth';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
padding: 0 10%;
`;

const ProfilePic = styled.div`
margin: 50px 0 0 0;
display: flex;
align-items: center;
gap: 15px;
`;
const Img = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #C4C4C4;
`;
const Name = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 800;
color: #000000;
`;
const ChangePic = styled.div`
margin: 10px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
&:hover{
    cursor: pointer;
}
`;
const FirstNameLastName = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
`;
const InputField = styled.input`    
width: 100%;
height: 40px;
border: 1px solid #000000;
border-radius: 5px;
padding: 0 10px;
margin: 10px 0 0 0;
// remove arrows from number input
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`;
const Email = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
`;
const ChangePassword = styled.div`
margin: 20px 0 60px 0;
font-size: 15px;
font-weight: 500;
color: #000000;
&:hover{
    cursor: pointer;
}
`;
const Line = styled.div`
width: 100%;
height: 1px;
background-color: #000000;
opacity: 0.2;
margin-bottom: 20px;
`;
const Buttons = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;
const Save = styled.button`
width: 100px;
height: 40px;
border: 1px solid #000000;
border-radius: 5px;
background-color: #A0AEC0;
font-size: 15px;
font-weight: 500;
color: white;
outline: none;
border: none;
&:hover{
    cursor: pointer;
}
`;
const Cancel = styled.button`
width: 100px;
height: 40px;
border: 1px solid #000000;
border-radius: 5px;
background-color: #FFFFFF;
font-size: 15px;
font-weight: 500;
color: #000000;
&:hover{
    cursor: pointer;
}
`;
const Logout = styled.div`
margin: 10px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
&:hover{
    cursor: pointer;
}
`;
const SaveAndCancel = styled.div`
display: flex;
gap: 10px;
`;

function Profile() { 
    const  navigate  = useNavigate()
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [mobilenumber, setMobileNo] = React.useState('')


    useEffect(() => {
        getProfileInformation().then((res) => {
            setName(res.data.name)
            setEmail(res.data.email)
            setMobileNo(res.data.mobilenumber)
        })
    },[])

    const handleSave = () => {
        const data = {name,mobilenumber}
        updateProfileInformation(data).then((res) => {
           if(res.status === 200){
            toast.success("Profile Updated Successfully")
        }
        else{
            toast.error("Something went wrong")
        }
        }).catch((err) => {
            console.log(err)
        })
    }
const handleLogout = () => {
    navigate("/")
    doLogout()
}
    
  return (
    <Wrapper>
        <ToastContainer />
        <ProfilePic>
            <Img src="./whatsnew3.jpg" alt="fsfsf"/>
            <div>
            <Name>Hi {name}</Name>
            <ChangePic type='file'>Change Photo</ChangePic>
            </div>
        </ProfilePic>
        <FirstNameLastName />
        <Name>First & Last Name</Name>
        <InputField value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name' type='text' />
        <Email>E-Mail Address</Email>
        <InputField value={email} placeholder='Enter your email' type='email' disabled/>
        <Email>Mobile Number</Email>
        <InputField value={mobilenumber} onChange={(e)=>{setMobileNo(e.target.value)}} placeholder='Enter your Mobile' type='number'/>
        <ChangePassword>Change Password</ChangePassword>
        <Line></Line>
        <Buttons>
            <SaveAndCancel>
            <Cancel>Cancel</Cancel>
            <Save onClick={handleSave}>Save</Save>
            </SaveAndCancel>
            <Logout onClick={handleLogout}>Logout</Logout>

        </Buttons>
    </Wrapper>
  )
}

export default Profile