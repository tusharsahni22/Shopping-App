import React, { useEffect } from 'react'
import styled from 'styled-components'
import Avatar from  "./avatar"
import {getProfileInformation, updateProfileInformation } from '../Services/profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.div`
width: 100%;
`;
const Card = styled.div`
padding: 10px 5%;

box-shadow: 0 2px 10px #0000001f;
border-radius: 25px;
`;

const Name = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 800;
color: #000000;
`;
const InputField = styled.input`    
width: 80%;
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
@media (max-width: 768px) {
  width: 80%;
}
`;
const Dob = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
`;

const Email = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
`;

const Buttons = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0;
`;
const Save = styled.button`
width: 100px;
height: 40px;
border: 1px solid #000000;
border-radius: 5px;
background-color: black;
font-size: 15px;
font-weight: 500;
color: white;
outline: none;
border: none;
&:hover{
    cursor: pointer;
}
`;


const SaveAndCancel = styled.div`
display: flex;
gap: 10px;
`;
const RadioButtons = styled.div`
display: flex;
margin: 10px 0 0 0;
gap: 10px;
`;
const Gender = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
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
top: -40px;
`;




function Profile(props) { 
    const [name, setName] = React.useState('Guest')
    const [email, setEmail] = React.useState('')
    const [mobilenumber, setMobileNo] = React.useState('')
    const [dob, setDob] = React.useState("1990-01-01")
    const [gender, setGender] = React.useState("")

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript
        const year = date.getFullYear();
      
        return `${year}-${month}-${day}`;
      };


    useEffect(() => {  
        getProfileInformation().then((res) => {
            setName(res.data.name)
            setEmail(res.data.email)
            setMobileNo(res.data.mobilenumber)
            setDob(formatDate(new Date(res.data.dob)))
            setGender(res.data.gender)
        }).catch((err) => {
                console.log("err",err)
            })
    },[])

    const handleSave = () => {
        const data = {name,mobilenumber,dob,gender}
         updateProfileInformation(data).then((res) => {
           if(res.status === 200){
            toast.success("Profile Updated Successfully")
            }}).catch((err) => {
            toast.error("Something went wrong")
            console.log("err",err)
         })
    }

    
  return (<>
    <Wrapper>
  <ToastContainer />
  <Welcome> {props.greeting}! {name?.split(" ")[0]}</Welcome>
  <Card>
    <AvatarDiv><Avatar name={name}/></AvatarDiv>
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <div>
        <Name>First & Last Name</Name>
        <InputField value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter your name' type='text' />
        </div>  
        <div>
        <Email>Mobile Number</Email>
        <InputField value={mobilenumber} onChange={(e)=>{setMobileNo(e.target.value)}} placeholder='Enter your Mobile' type='number'/>
        </div>
        </div>
        <Email>E-Mail Address</Email>
        <InputField value={email} placeholder='Enter your email' type='email' disabled/>
        <Dob>Birthdate</Dob>
        <InputField onChange={(e)=>{setDob(e.target.value)}} type='date'  value={dob} />
        <Gender>Gender</Gender>
        <RadioButtons>
            <input type='radio' name='gender' value='Male' checked={gender === 'Male'} onChange={()=>{setGender("Male")}}/>
            <label>Male</label>
            <input type='radio' name='gender' value='Female' checked={gender === 'Female'} onChange={()=>{setGender("Female")}} />
            <label>Female</label>
            <input type='radio' name='gender' value='Other' checked={gender === 'Other'} onChange={()=>{setGender("Other")}}/>
            <label>Other</label>
        </RadioButtons>
        <Buttons>
            <SaveAndCancel>
            <Save onClick={()=>handleSave()}>Save</Save>
            </SaveAndCancel>
        </Buttons>
        </Card>
    </Wrapper>
    </>
  )
}

export default Profile