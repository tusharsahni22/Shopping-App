import React from "react";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Whatsnew from "../Homepage/Whatsnew";
import { useDispatch } from "react-redux";
import { addToCart } from "../reducers/cart";
// import { nanoid } from '@reduxjs/toolkit';
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CiDiscount1 } from "react-icons/ci";
import { FcDisclaimer } from "react-icons/fc";

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
  margin-bottom: 10px;
`;
const Disclaimer = styled(FcDisclaimer)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  margin-top: 10px;
  color: red;
  `;

const PriceFinal = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;
const DiscountPrice = styled.div`
  margin-top: 25px;
  font-size: 20px;
  color: black;
`;
const SAVEtAGLINE = styled.div`
  margin-top: 25px;
  font-size: 15px;
  color: red;
`;

const Price = styled.div`
  margin-top: 25px;
  font-size: 20px;
  font-weight: bold;
  text-decoration: line-through;
`;
const Specification = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 16px;
`;
const Text = styled.div`
  margin-top: 40px;
  font-weight: bold;
`;
const Quantity = styled.select`
  width: 55px;
  height: 35px;
  border: 1px solid #d2d6dc;
  margin-top: 10px;
  appearance: none; /* Remove default dropdown icon */
  background: url("/chevron-double-down.svg") no-repeat right center; /* Add custom icon */
  background-size: 12px; /* Adjust size of custom icon */
  background-position: calc(100% - 5px) center; /* Adjust 10px to the padding you want */
  padding-left: 10px;
  border-radius: 7px;
  &:focus {
    outline: 2px solid blue;
  }
`;
const Option = styled.option``;

const AddtoCart = styled.div`
  height: 27px;
  margin-top: 20px;
  /* background-color: #212121; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0px;
  border-radius: 7px;
  border: 1px solid black;  
  color: black;
    background: transparent;
  background-image: url('https://web.archive.org/web/20160312084140im_/http://splatoon.nintendo.com/assets/img/nav-bg-fill-blue.png?1443460871');
  background-repeat: repeat-x;
  background-position: 0 -100%;
  transition: 1.5s ease;
  &:hover{
  background-position: center;
  cursor: pointer;
  border: 0.5px solid black;
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
  &:hover {
    cursor: pointer;
  }
`;
const CartIcon = styled(IoCartOutline)`
  pointer-events: none;
`;
const FavoriteIcon = styled(MdFavoriteBorder)`
  &:hover {
    background-color: black;
    color: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Colour = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;
const MainColour = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 60%;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
    border-radius: 48%;
    border: 2px solid black;
  }
`;
const Size = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const MainSizes = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;
const Offers = styled.div`
  gap: 10px;
  margin-top: 10px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
`;
const Offer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 7px;
  font-weight: bold;
`;
const Discount = styled(CiDiscount1)`
  height: 20px;
  width: 20px;
`;

function Product() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(1);
  const { state } = useLocation();
  const { id, title, price, mainPicture, specification, altPictures } = state;
  // description,size

  const images = [
    {
      original: mainPicture,
      thumbnail: mainPicture,
    },
    {
      original: altPictures[0],
      thumbnail: altPictures[0],
    },
    {
      original: altPictures[1],
      thumbnail: altPictures[1],
    },
    {
      original: altPictures[2],
      thumbnail: altPictures[2],
    },
  ];
  const handleAddtocart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        quantity,
        pic: mainPicture,
      })
    );
    toast.success("Added to cart successfully");
  };
  const discountPrice = (pricetoConvert) => {
    return pricetoConvert - 0.1675 * pricetoConvert;
  };

  return (
    <Wrapper>
      <ToastContainer />
      <Upper>
        <Section1>
          <ImageGallery
            className="image-gallery-content image-gallery-thumbnails-container image-gallery-thumbnail image-gallery-thumbnail.active"
            showFullscreenButton={false}
            showNav={false}
            showPlayButton={false}
            items={images}
          />
        </Section1>
        <Section2>
          <Tittle>{title}</Tittle>
          <PriceFinal>
            <Price>₹{price}</Price>
            <DiscountPrice>₹{discountPrice(price)}</DiscountPrice>
            <SAVEtAGLINE>Save 16.75%</SAVEtAGLINE>
          </PriceFinal>
          <div>(Incl. of all taxes)</div>
          <Offers>
            <Line></Line>
            <Offer>
              <Discount /> Buy 2, get extra 10% instant discount{" "}
            </Offer>
            <Offer>
              <Discount /> Buy 3, get extra 20% instant discount{" "}
            </Offer>
          </Offers>
          <Description>Specification </Description>
          <Specification>
            <ul>
              <br/>   
              <li>Full Sleeves</li>
              <li>Crew Neck</li>
              <li>Regular Fit</li>
              <li>Printed</li>
              <li>Cotton Blend</li>
              <li>Natural Stretch</li>
              <li>FABRIC: 100% Cotton</li>
            </ul>
          </Specification>
          <Text>Color </Text>
          <Colour>
            <MainColour style={{ backgroundColor: "black" }} />
            <MainColour style={{ backgroundColor: "white" }} />
            <MainColour style={{ backgroundColor: "red" }} />
            <MainColour style={{ backgroundColor: "blue" }} />
          </Colour>
          <Text>Size </Text>
          <Size>
            <MainSizes>S</MainSizes>
            <MainSizes>M</MainSizes>
            <MainSizes>L</MainSizes>
            <MainSizes>XL</MainSizes>
            <MainSizes>XXL</MainSizes>
          </Size>
          <Text>Quantity</Text>

          <Quantity
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
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
          <Description>Description </Description>

          <div>
            The {title} {specification}
            <br />
            <br />
            <br />
            <Disclaimer/>
            Disclaimer:
            <br />
            <br />
            Actual colour of the product may vary slightly due to photographic lighting sources or your device.
          </div>



          <AddtoCart onClick={handleAddtocart}>
            <CartIcon /> Add to Cart
          </AddtoCart>
          <Favorite>
            <FavoriteIcon />
            Favorite
          </Favorite>
        </Section2>
      </Upper>
      <Whatsnew title={"Best Seller"} />
    </Wrapper>
  );
}

export default Product;
