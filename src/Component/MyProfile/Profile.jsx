import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 0 10%;
`;
const Head = styled.div`
margin: 70px 0 0 0 ;
display: flex;
justify-content: center;
gap: 20px;
`;
const Title = styled.div`
font-size: 15px;
font-weight: 500;
color: #000000;
&:hover{
    cursor: pointer;
}
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
  return (
    <Wrapper>
        <Head>
            <Title>Your Profile</Title>
            <Title>Order History</Title>
            <Title>Reward</Title>
            <Title>Favorites</Title>
        </Head>
        <ProfilePic>
            <Img src="./whatsnew3.jpg" alt="fsfsf"/>
            <div>
            <Name>Hi {"Tushar"}</Name>
            <ChangePic type='file'>Change Photo</ChangePic>
            </div>
        </ProfilePic>
        <FirstNameLastName />
        <Name>First & Last Name</Name>
        <InputField />
        <Email>E-Mail Address</Email>
        <InputField />
        <ChangePassword>Change Password</ChangePassword>
        <Line></Line>
        <Buttons>
            <SaveAndCancel>
            <Save>Save</Save>
            <Cancel>Cancel</Cancel>
            </SaveAndCancel>
            <Logout>Logout</Logout>

        </Buttons>
    </Wrapper>
  )
}

export default Profile