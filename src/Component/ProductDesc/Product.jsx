import React from 'react';
import styled from 'styled-components';
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Whatsnew from '../Homepage/Whatsnew';
import { useDispatch } from 'react-redux';
import { addToCart } from '../reducers/cart';
// import { nanoid } from '@reduxjs/toolkit';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div``;
const Upper = styled.div`
display: flex;
gap: 50px;
`;
const Section1 = styled.div``;
const Section2 = styled.div``;
// const Frame = styled.img``;
const Tittle = styled.div`
margin-top: 20px;
font-size: 1.5rem;
font-weight: bold;
`;
const Description = styled.div`
margin-top: 20px;
font-size: 20px;
font-weight: bold;
`;
const Price = styled.div`
margin-top: 25px;
font-size: 20px;
font-weight: bold;
`;
const Specification = styled.div`
margin-top: 40px;
font-size: 16px;
font-weight: bold;
`;
const Text = styled.div`
margin-top: 40px;
font-weight: bold;
`;
const Quantity = styled.select`
    width: 55px;
    height: 35px;
    border: 1px solid #D2D6DC;
    margin-top: 10px;
    appearance: none; /* Remove default dropdown icon */
    background: url('/chevron-double-down.svg') no-repeat right center; /* Add custom icon */
    background-size: 12px; /* Adjust size of custom icon */
    background-position: calc(100% - 5px) center; /* Adjust 10px to the padding you want */
    padding-left: 10px;
    border-radius: 7px;
    &:focus {
      outline: 2px solid blue;
    }
`;
const Option = styled.option`

`;
const AddtoCart = styled.div`
height: 27px;
margin-top: 20px;
background-color: #212121;
color: white;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
padding: 10px 0px;
border-radius: 7px;
&:hover{
  cursor: pointer;
}
`;
const Favorite = styled.div`
height: 27px;
margin-top: 20px;
background-color: white;
color: black;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
padding: 10px 0px;
outline: 1px solid black;
border-radius: 7px;
width: 100%;
&:hover{
  cursor: pointer;
}
`;
const CartIcon = styled(IoCartOutline)`
pointer-events: none;
`;
const FavoriteIcon = styled(MdFavoriteBorder)`

&:hover{
  background-color: black;
  color: white;
  border-radius: 50%;
  cursor: pointer;
}
`;



function Product() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const {state} = useLocation();
  const {id,title,price,pic,specification} = state;
  // description,size
  console.log("id",pic)

    const images = [
        {
          original: "./cool-man-sweatshirt.png",
          thumbnail: "./cool-man-sweatshirt.png",
        },
        {
          original: "./man-hd.png",
          thumbnail: "./man-hd.png",
        },
        {
          original: "./man-tshirt.png",
          thumbnail: "./man-tshirt.png",
        },
      ];
      const handleAddtocart = () => {
        dispatch(addToCart({
          id,
          title,
          price,
          quantity,
          pic
        }))
      }

    return (
        <Wrapper>
        <Upper>
        <Section1>
            <ImageGallery className="image-gallery-content image-gallery-thumbnails-container image-gallery-thumbnail image-gallery-thumbnail.active" showFullscreenButton={false} showNav={false} showPlayButton={false} items={images} />
        </Section1>
        <Section2>
            <Tittle>{title}</Tittle>
            <Description>Design by </Description>
            <Price>₹{price}</Price>
            <Specification>{specification}</Specification>
            <Text>Quantity</Text>
            
            <Quantity onChange={(e)=>{setQuantity(e.target.value)}}>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="6">6</Option>
            <Option value="7">7</Option>
            <Option value="8">8</Option>
            <Option value="9">9</Option>
            <Option value="10">10</Option>
            </Quantity>
            
            <AddtoCart onClick={handleAddtocart}> <CartIcon/> Add to Cart</AddtoCart>
            <Favorite><FavoriteIcon/>Favorite</Favorite>
   
        </Section2>
        </Upper>
        <Whatsnew title={"Best Seller"}/>
        </Wrapper>
    );
}

export default Product;
