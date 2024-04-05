import React, { useEffect } from 'react'
import styled from 'styled-components'
import { LiaEdit } from "react-icons/lia";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { addAddress, getProfileInformation, removeAddress } from '../Services/profile';
import { ToastContainer,toast } from 'react-toastify';

const Wrapper = styled.div`
width: 100%;
`;
const Card = styled.div`
padding: 50px 5%;
gap: 25px;
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
box-shadow: 0 2px 10px #0000001f;
border-radius: 25px;
@media (max-width:850px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
};
@media (min-width:851px) and (max-width:1100px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
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

const Box = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding: 10px 5%;
height: 280px;
border-radius: 10px;
box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
min-width: 165px;
min-height: 320px;
`;
const Options =styled.div`
display: flex;
justify-content: flex-end;  
gap 10px
`;
const DeleteIcon = styled(MdDeleteOutline)`
font-size: 20px;
align-self: end;
`;

const EditIcon = styled(LiaEdit)`
font-size: 20px;
align-self: end;
`;
const Addressdetails = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 10px;
`;
const Name = styled.input`
font-size: 20px;
font-weight: 400;
letter-spacing: 0.025em;
border: none;
background-color: transparent;
`;
const Address = styled.input`
font-size: 15px;
font-weight: 400;
letter-spacing: 0.025em;
word-wrap: break-word;
overflow: hidden;
border: none;
background-color: transparent;
resize: none;
`;
const Pincode = styled.input`
font-size: 15px;
font-weight: 400;
letter-spacing: 0.025em;
background-color: transparent;
border: none;
`;
const State = styled.input`
font-size: 15px;
font-weight: 400;
letter-spacing: 0.025em;
background-color: transparent;
border: none;
`;
const Mobile = styled.input`
background-color: transparent;
font-size: 15px;
font-weight: 400;
letter-spacing: 0.025em;
border: none;
`;
const Save = styled.div`
background-color: black;
color: white;
width: 100px;
padding: 5px;
border-radius: 5px;
text-align: center;
align-self: end;
font-size: 15px;
font-weight: 400;
letter-spacing: 0.025em;
`;
const Addnew = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
justify-content: center;
height: 100%;
`;
const Button = styled.div`
background-color: black;
margin-top: 29px;
color: white;
width: 125px;
padding: 5px;
border-radius: 25px;
text-align: center;
align-self: right;
font-size: 15px;
font-weight: 400;
letter-spacing: 0.025em;
cursor: pointer;

`;




function MyAddress({name, greeting}) {
    const [triggerRefetch, setTriggerRefetch] = React.useState(false)
    const [edit, setEdit] = React.useState(false)
    const [address, setAddress] = React.useState([{
        name:"",
        address:"",
        landmark:"",
        state:"",
        city:"",
        pincode:"",
        phoneNo:""
    }])
    const [addressList, setAddressList] = React.useState([])
    
    const handleAddressSave =()=>{
        addAddress({address}).then((res)=>{
            if(res.status === 200){
                toast.success("Profile Updated Successfully")
            }}).catch(()=>{
                toast.error("Profile Update Failed")
            })
        
        console.log("first",address)
        setAddress({name:"",address:"",landmark:"",state:"",city:"",pincode:"",phoneNo:""})
        setEdit(!edit)
        setTriggerRefetch(!triggerRefetch)
        console.log("first",triggerRefetch)
    }
    const handleDelete = (id)=>{
        removeAddress({"addressId":id}).then((res)=>{
            console.log("first",id)
            if(res.status === 200){
                toast.success("Profile Updated Removed")
            }}).catch(()=>{
                toast.error("Profile Update Failed")
            })
        setTriggerRefetch(!triggerRefetch)
        console.log("first",triggerRefetch)
    }

    useEffect(()=>{
        console.log("first",triggerRefetch)
        getProfileInformation().then((res)=>{
            console.log("first",res.data.address)
            setAddressList(res.data.address)
        }).catch((err)=>{
            console.log(err)
        })
    },[triggerRefetch])

  return (
    <Wrapper>
        <ToastContainer />
      <Welcome> {greeting}! {name?.split(" ")[0]}</Welcome>
        <Card>
        <Box>
                {edit?<div style={{marginTop:"41px",display:"flex",flexDirection:"column"}}><Addressdetails>
                    <Name  placeholder='Name' onChange={(e)=>{setAddress({...address,"name":e.target.value})}} value={address.name} disabled={!edit}/>
                    <Address placeholder='Full address' as="textarea" onChange={(e)=>{setAddress({...address,"address":e.target.value})}} value={address.address} disabled={!edit}/>
                    <Address placeholder='Landmark' as="textarea" onChange={(e)=>{setAddress({...address,"landmark":e.target.value})}} value={address.landmark} disabled={!edit}/>
                    <Address placeholder='City' as="textarea" onChange={(e)=>{setAddress({...address,"city":e.target.value})}} value={address.city} disabled={!edit}/>
                    <State placeholder='State' onChange={(e)=>{setAddress({...address,"state":e.target.value})}} value={address.state} disabled={!edit}/>
                    <Pincode placeholder='Pincode' onChange={(e)=>{setAddress({...address,"pincode":e.target.value})}} value={address.pincode} disabled={!edit}/>
                    <Mobile placeholder='Mobile Number' style={{marginBottom:"19px"}} onChange={(e)=>{setAddress({...address,"phoneNo":e.target.value})}} value={address.phoneNo} disabled={!edit}/>
                </Addressdetails>
                <Save onClick={()=>{handleAddressSave()}}>Save</Save>
                </div>:
                <Addnew>
                    <HiOutlineMapPin style={{fontSize:"25px"}} onClick={()=>{setEdit(!edit)}}  />
                    <Button onClick={()=>{setEdit(!edit)}}>Add New Address</Button>
                </Addnew>}
            </Box>
            {addressList.map((e)=>(
            <Box key={e._id}>
                <Options>
                    <EditIcon onClick={()=>{setEdit(!edit)}}></EditIcon>
                    <DeleteIcon onClick={()=>{handleDelete(e._id)}} />
                </Options>
                <Addressdetails>
                    <Name value={e.name} disabled={!edit}/>
                    <Address as="textarea" value={e.address} disabled={!edit}/>
                    <Address as="textarea" value={e.landmark} disabled={!edit}/>
                    <Address as="textarea" value={e.city} disabled={!edit}/>
                    <State value={e.state} disabled={!edit}/>
                    <Pincode value={e.pincode} disabled={!edit}/>
                    <Mobile value={e.phoneNo} disabled={!edit}/>
                </Addressdetails>
                {edit?<Save>Save</Save>:""}
            </Box>
           ))}
        </Card>
    </Wrapper>
  )
}

export default MyAddress