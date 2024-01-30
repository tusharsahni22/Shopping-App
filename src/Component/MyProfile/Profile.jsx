import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getProfileInformation, updateProfileInformation } from '../Services/profile';
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




function Profile(props) { 
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [mobilenumber, setMobileNo] = React.useState('')


    useEffect(() => {
        getProfileInformation().then((res) => {
            setName(res.data.name)
            props.setName(res.data.name)
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

    
  return (<>
    <Wrapper>
  <ToastContainer />
  <Welcome>Good Evening {name.split(" ")[0]}!</Welcome>
  <Card>
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
        <InputField placeholder='Enter your Birthdate' type='date' />
        <Gender>Gender</Gender>
        <RadioButtons>
            <input type='radio' name='Male'/>
            <label>Male</label>
            <input type='radio' name='Female'/>
            <label>Female</label>
            <input type='radio' name='Other'/>
            <label>Other</label>
        </RadioButtons>
        <Buttons>
            <SaveAndCancel>
            <Cancel>Cancel</Cancel>
            <Save onClick={handleSave}>Save</Save>
            </SaveAndCancel>
        </Buttons>
        </Card>
    </Wrapper>
    </>
  )
}

export default Profile