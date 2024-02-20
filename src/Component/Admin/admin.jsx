import React from 'react'
import styled from 'styled-components'
import DynamicInput from './dynamicInput'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageUpload from './uploadImage';
import MainImage from "./uploadImagemainPicture"
import { uploadProduct } from '../Services/product';

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
const Images = styled.div`
display: flex;
gap: 10px;
margin: 20px 0 0 0;
`;
const Colour = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
`;
const Stock = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
`;
const Variants = styled.div`
margin: 20px 0 0 0;
display: flex;
gap: 10px;
`;

const ColortoIndexMap = styled.div`
margin: 20px 0 0 0;
font-size: 15px;
font-weight: 500;
color: #000000;
`;
const Twodivs = styled.div`
display: flex;
gap: 10px;
margin: 10px 0 ;
`;

function Admin(props) {

    const [title, setTitle] = React.useState('')
    const [specification, setSpecification] = React.useState([])
    const [price, setPrice] = React.useState(0)
    const [priceAfterDiscount, setPriceAfterDiscount] = React.useState(0)
    const [description, setDescription] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [color, setColor] = React.useState([])
    const [size, setSize] = React.useState("")
    const [stocks, setStocks] = React.useState([{black:0},{white:0}])
    const [colourToIndexMap, setColourToIndexMap] = React.useState([{black:0},{white:0}])
    const [mainPicture, setMainPicture] = React.useState([])
    const [altPictures, setAltPictures] = React.useState([])

    const handleSubmit = () => {
        const data = {
            title,
            specification,
            price,
            priceAfterDiscount,
            description,
            category,
            color,
            size,
            stock:stocks,
            colorToIndexMap:colourToIndexMap,
            altPicture:altPictures,
            pic:mainPicture
        }
        console.log("first",data)
        uploadProduct(data).then((res)=>{
            console.log("res",res)  
        }).catch((err)=>{
            console.log("err",err)
        })

    }
    
  return (
    <Wrapper>
  <ToastContainer />
  <Welcome> {props.greeting}! {props.name} </Welcome>
  <Card>
        <div style={{display:'flex',justifyContent:"space-between"}}>
        <div>
        <Name>Product Title</Name>
        <InputField value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter your Product name' type='text' />
        </div>  
        <div>
        <Email>Price To Display</Email>
        <InputField value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter your price to display' type='number'/>
        </div>
        <div>
        <Email>Price After Discount</Email>
        <InputField value={priceAfterDiscount} onChange={(e)=>{setPriceAfterDiscount(e.target.value)}} placeholder='Enter your price after discount' type='number'/>
        </div>
        </div>
        <Email>Specification</Email>
        <DynamicInput specification={specification} setSpecification={setSpecification}/>
        <Dob>Despription</Dob>
        <InputField onChange={(e)=>{setDescription(e.target.value)}} type='text' placeholder="Enter the description"  value={description} />
        <Gender>Category</Gender>
        <RadioButtons>
            <input type='radio' name='category' value='t-shirt' checked={category === 't-shirt'} onChange={()=>{setCategory("t-shirt")}}/>
            <label>T-shirt</label>
            <input type='radio' name='category' value='sweatshirt' checked={category === 'sweatshirt'} onChange={()=>{setCategory("sweatshirt")}} />
            <label>Sweatshirt</label>
            <input type='radio' name='category' value='hoodies' checked={category === 'hoodies'} onChange={()=>{setCategory("hoodies")}}/>
            <label>Hoodies</label>
        </RadioButtons>
        <Colour>Colour</Colour>
        <RadioButtons>
            <input type='checkbox'   value='black'   onChange={(e) => {e.target.checked ? setColor([...color, e.target.value]) : setColor(color.filter(col => col !== e.target.value))}}/>
            <label>Black</label>
            <input type='checkbox'   value='white'   onChange={(e) => {e.target.checked ? setColor([...color, e.target.value]) : setColor(color.filter(col => col !== e.target.value))}}/>
            <label>White</label>
        </RadioButtons>
        <Colour>Sizes</Colour>
        <RadioButtons>
            <input type='checkbox'  value='small'  onChange={(e)=>{e.target.checked? setSize([...size,e.target.value]): setSize(size.filter(s=>s !== e.target.value))}}/>
            <label>Small</label>
            <input type='checkbox'  value='medium'  onChange={(e)=>{e.target.checked? setSize([...size,e.target.value]): setSize(size.filter(s=>s !== e.target.value))}}/>
            <label>Medium</label>
            <input type='checkbox'  value='large'  onChange={(e)=>{e.target.checked? setSize([...size,e.target.value]): setSize(size.filter(s=>s !== e.target.value))}} />
            <label>Large</label>
            <input type='checkbox'  value='xl'  onChange={(e)=>{e.target.checked? setSize([...size,e.target.value]): setSize(size.filter(s=>s !== e.target.value))}} />
            <label>Xl</label>
            <input type='checkbox'  value='xxl'  onChange={(e)=>{e.target.checked? setSize([...size,e.target.value]): setSize(size.filter(s=>s !== e.target.value))}} />
            <label>Xxl</label>
        </RadioButtons>
        <Stock>Stocks</Stock>
        <Variants>
            <Twodivs >
            <label>Black</label>
            <input placeholder='Enter the quantity'  type='number' onChange={(e) => {
    const updatedStocks = stocks.map((stock, index) => 
      index === 0 // replace 0 with the index of the object you want to update
        ? { ...stock, black: e.target.value }
        : stock
    );
    setStocks(updatedStocks);
  }}  />
            <label>White</label>
            <input placeholder='Enter the quantity' type='number' onChange={(e) => {
    const updatedStocks = stocks.map((stock, index) => 
      index === 1 // replace 0 with the index of the object you want to update
        ? { ...stock, white: e.target.value }
        : stock
    );
    setStocks(updatedStocks);
  }}  />
            </Twodivs>
        </Variants>
        <ColortoIndexMap>Colour to index map</ColortoIndexMap>
        <Twodivs>
        <label>Black</label>
        <input placeholder='Enter the Index' type='number' onChange={(e) => {
    const updatedMapIndex = colourToIndexMap.map((prev , index) => 
      index === 0 // replace 0 with the index of the object you want to update
        ? {...prev, black: e.target.value }
        : prev
    );
    setColourToIndexMap(updatedMapIndex);
  }}  />
        </Twodivs>
        <Twodivs >
        <label>White</label>
        <input placeholder='Enter the quantity' type='number' onChange={(e) => {
    const updatedMapIndex = colourToIndexMap.map((prev , index) => 
      index === 1 // replace 0 with the index of the object you want to update
        ? {...prev, white: e.target.value }
        : prev
    );
    setColourToIndexMap(updatedMapIndex);
  }} />
        </Twodivs>
        <Images>
        <MainImage   mainPicture={mainPicture} setMainPicture={setMainPicture} />
        <ImageUpload altPictures={altPictures} setAltPictures={setAltPictures} />
        <ImageUpload altPictures={altPictures} setAltPictures={setAltPictures} />
        <ImageUpload altPictures={altPictures} setAltPictures={setAltPictures} />
        </Images>
        <Buttons>
            <SaveAndCancel>
            <Save onClick={handleSubmit}>Save</Save>
            </SaveAndCancel>
        </Buttons>
        </Card>
    </Wrapper>
  )
}

export default Admin