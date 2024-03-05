import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getProfileInformation } from "../Services/profile";
import OtpVerificationPage from "./OtpVerificationPage";
import { placeNewOrder } from "../Services/Checkout";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const Wrapper = styled.div`
  display: flex;
  /* padding: 0 5%; */
  justify-content: center;
  gap: 5%;
  width: 100%;
`;
const Left = styled.div`
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 5%;
`;
const Right = styled.div``;
const Head = styled.div`
  letter-spacing: 4px;
  margin-bottom: 40px;
`;

const CheckoutTagLine = styled.div`
  height: 100px;
  position: relative;
  border: 1px solid black;
  margin-top: 20px;
  &::before {
    content: "EXPRESS CHECKOUT";
    position: absolute;
    top: -10px;
    left: 29%;
    background: white;
  }
`;
const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const InputContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  display: flex;
  gap: 10px;
`;
const TwoField = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  gap: 10px;
`;
const Input = styled.input`
  margin: 5px 0;
  height: 25px;
  padding: 15px 0 0 10px;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: 1px solid black;

  &:placeholder-shown + label,
  &:empty + label {
    font-size: 12px;
    cursor: text;
    top: 5px;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 12px;
    cursor: pointer;
    top: 0;
  }
`;
const PlaceholderLabel = styled.label`
  position: absolute;
  padding: 10px 10px;
  top: 0px;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #999;
`;
const Products = styled.div`
  height: auto;
`;
const PaymentMode = styled.div`
  margin-top: 20px;
`;
const Line = styled.div`
  height: 1px;
  background-color: gray;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 15px;
`;
const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 10px;
`;
const TotalText = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: right;
`;
const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: right;
`;

const Shipping = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
  text-align: right;
`;
const ShippingPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: gray;
  margin-bottom: 10px;
`;
const PaymentGateWayLogo = styled.img`
  width: 100%;
  height: 100%;
`;
const ProcedToPay = styled.div`
  width: 190px;
  height: 60px;
  background-color: black;
  color: white;
  font-weight: 700 !important;
  border: 1px transparent solid;
  border-radius: 5px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const CartItems = styled.div`
  display: flex;
  gap: 10px;
  /* padding: 0 25px; */
  margin-top: 20px;
`;
const Image = styled.img`
  height: 100px;
  width: 100px;
  background-color: #d2d6dc;
  border-radius: 5px;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
`;
const Name = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;
const Size = styled.div``;
const Color = styled.div`
  margin: 0 0 10px 0;
`;
// const Price = styled.div`
// `;
const PriceTotal = styled.div`
  margin-left: auto;
`;
const AllCartItems = styled.div`
  height: 50vh;
  padding: 0 15px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const TwoField1 = styled.div`
  display: flex;
  /* width: 100%; */
  gap: 10px;
`;

const PreviouslySavedAddress = styled.div`
  padding: 10px;
  margin: 20px 0;
  text-align: center;
  color: #4a4a4a;
  height: 287px;
  overflow-y: scroll;
`;
const Addresses = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #d2d6dc;
  border-radius: 5px;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  text-align: left;
`;
const UseThisAddress = styled.div`
  background-color: #f2f2f2;
  padding: 5px;
  border-radius: 5px;
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    background-color: #d2d6dc;
  }
`;

function Checkout() {
  const product = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const [address, setAddress] = React.useState([]);
  const [selectedAddress, setSelectedAddress] = React.useState(null);
  const [addNewAddress, setAddNewAddress] = React.useState(false);
  const [selectedPayment, setSelectedPayment] = React.useState("credit");
  const [shippingCost, setShippingCost] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [OtpPage, setOtpPage] = React.useState(false);
  const [otpVerification, setOtpVerification] = React.useState(false);
  const [orderSuccessDetails, setOrderSuccessDetails] = React.useState();

  const navigate = useNavigate();

  useEffect(() => {
    getProfileInformation()
      .then((res) => {
        console.log("first", res.data);
        setAddress({address:res.data.address,email:res.data.email});
      })
      .catch((err) => {
        console.log("Error in getProfileInformation", err);
      });
  }, []);

  const handlePaymentChange = (e) => {
    if (e.target.value === "cash" && selectedPayment !== "cash") {
      setShippingCost(shippingCost + 100);
    } else if (e.target.value !== "cash" && selectedPayment === "cash") {
      setShippingCost(shippingCost - 100);
    }
    setSelectedPayment(e.target.value);
  };

  useEffect(() => {
    if (otpVerification) {
      const products = product.map((e) => ({
        productId: e.id,
        quantity: e.quantity,
        size: e.size,
        color: e.color,
      }));
      const data = {
        products,
        address: selectedAddress,
        paymentMode: selectedPayment,
        total: total + shippingCost,
        shippingCost,
        orderId: uuid(),
      };
      setIsLoading(true);
      placeNewOrder(data)
        .then((res) => {
          console.log("first",res)
          if (res.status === 201) {
            setIsLoading(false);
            setOrderSuccessDetails(res.data);
          }
        })
        .catch((err) => {
          console.log("Error in placeNewOrder", err);
        });
    }
  }, [otpVerification]);

  useEffect(() => {
    if (orderSuccessDetails) {
      AfterOrderFunctions();
    }
  }, [orderSuccessDetails]); // Add orderSuccessDetails as a dependency
  
  const AfterOrderFunctions = () => {
    // console.log(orderSuccessDetails);
    navigate("/order-success",{state: {
      orderId: orderSuccessDetails.orderId,
      email: address.email,
      paymentMode: orderSuccessDetails.paymentMode,
      address: orderSuccessDetails.address,
      total: orderSuccessDetails.total,
      shippingCost: orderSuccessDetails.shippingCost,
    }});
  };

  const handlePlaceOrder = () => {
   if(selectedPayment === "cash"){
     setOtpPage(true);
  }else{
    // setOtpPage(true);
    // online payment gateway

  }
};

  return (
    <Wrapper>
      {OtpPage?
        <OtpVerificationPage
          mobile={selectedAddress.phoneNo}
          setOtpPage={setOtpPage}
          setOtpVerification={setOtpVerification}/> : "" }
      {isLoading ?
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Oval
            visible={true}
            height="130"
            width="130"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div> : ""}
      <Left>
        <Head>
          Information {">"} Shipping {" > "}Payment
        </Head>
        <CheckoutTagLine>
          <PaymentGateWayLogo src="./PhonePe.svg" />
        </CheckoutTagLine>
        <AddressForm>
          {address.address?.length > 0 && addNewAddress ? (
            <Addresses
              onClick={() => {
                setAddNewAddress(false);
              }}
            >
              Use Previously saved address
            </Addresses>
          ) : (
            <Addresses>Previously saved address</Addresses>
          )}
          {address.address?.length > 0 && !addNewAddress ? (
            <PreviouslySavedAddress>
              {address.address?.map((e) => (
                <Addresses key={e._id}>
                  <div>
                    <p>{e.name}</p>
                    <p>{e.address}</p>
                    <p>{e.landmark}</p>
                    <p>{e.pincode}</p>checked
                    <p>
                      {e.city} {e.state}
                    </p>
                    <p>{e.phoneNo}</p>
                  </div>
                  <UseThisAddress
                    style={{
                      background: selectedAddress?._id === e._id ? "black" : "",
                      color: selectedAddress?._id === e._id ? "white" : "",
                    }}
                    onClick={() => {
                      setSelectedAddress(e);
                    }}
                  >
                    Use this address
                  </UseThisAddress>
                </Addresses>
              ))}
            </PreviouslySavedAddress>
          ) : (
            ""
          )}

          <Addresses
            onClick={() => {
              setAddNewAddress(true);
            }}
          >
            Add new address
          </Addresses>
          {address?.length === 0 || addNewAddress ? (
            <div>
              <TwoField>
                <InputContainer>
                  <Input type="text" required placeholder=" " />
                  <PlaceholderLabel>Name</PlaceholderLabel>
                </InputContainer>
                <InputContainer>
                  <Input type="text" required placeholder=" " />
                  <PlaceholderLabel>Phone Number</PlaceholderLabel>
                </InputContainer>
              </TwoField>
              <InputContainer>
                <Input type="text" required placeholder=" " />
                <PlaceholderLabel>Address</PlaceholderLabel>
              </InputContainer>
              <InputContainer>
                <Input type="text" required placeholder=" " />
                <PlaceholderLabel>Appartments,Suits etc</PlaceholderLabel>
              </InputContainer>

              <TwoField>
                <InputContainer>
                  <Input type="text" required placeholder=" " />
                  <PlaceholderLabel>City</PlaceholderLabel>
                </InputContainer>
                <InputContainer>
                  <Input type="text" required placeholder=" " />
                  <PlaceholderLabel>Pincode</PlaceholderLabel>
                </InputContainer>
              </TwoField>

              <InputContainer>
                <Input type="text" required placeholder=" " />
                <PlaceholderLabel>State</PlaceholderLabel>
              </InputContainer>
            </div>
          ) : (
            ""
          )}
        </AddressForm>
      </Left>
      <Right>
        <Products>
          <AllCartItems>
            {product.map((e) => (
              <CartItems key={e.id}>
                <Image src={e.pic} />
                <Details>
                  <Name>{e.title}</Name>
                  <Size>Size : {e.size.toUpperCase()}</Size>
                  <Color>
                    Colour :{" "}
                    {e.color.charAt(0).toUpperCase() + e.color.slice(1)}
                  </Color>
                </Details>
                <TotalPrice>
                  <PriceTotal>₹{e.total}</PriceTotal>
                </TotalPrice>
              </CartItems>
            ))}
          </AllCartItems>
        </Products>
        <Line></Line>
        <PaymentMode>
          <div style={{ fontSize: "16px", margin: "20px 0 20px 0" }}>
            Payment Mode
          </div>
          <TwoField1>
            <input
              onChange={handlePaymentChange}
              type="radio"
              name="payment"
              value="credit"
              defaultChecked
            />
            <label>Pay online</label>
          </TwoField1>
          <TwoField1>
            <input
              onChange={handlePaymentChange}
              type="radio"
              name="payment"
              value="cash"
            />
            <label>Cash on delivery</label>
          </TwoField1>
        </PaymentMode>
        <Line></Line>
        <Total>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Shipping>Shipping</Shipping>
            <ShippingPrice>₹{shippingCost}</ShippingPrice>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TotalText>Total</TotalText>
            <TotalPrice>₹{total + shippingCost}</TotalPrice>
          </div>
        </Total>
        <Line></Line>
        <Total />
        <ProcedToPay onClick={handlePlaceOrder}>Proceed to pay</ProcedToPay>
      </Right>
    </Wrapper>
  );
}

export default Checkout;
