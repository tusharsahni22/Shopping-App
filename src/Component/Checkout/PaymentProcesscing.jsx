import React, { useEffect,useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { placeNewOrder ,getPendingOrders} from '../Services/Checkout';

const PaymentSuccessPage = () => {
  
  const { id: orderId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Processing your order...');
  const [orderSuccessDetails, setOrderSuccessDetails] = React.useState();

  useEffect(() => {
    console.log('orderId:', orderId);
    if (orderId) {
      retrieveOrderDetails(orderId);
    }
  }, [orderId]);

  useEffect(() => {
    setTimeout(() => {
      navigate("/order-success",{state: {
        orderId: orderSuccessDetails.orderId,
        // email: address.email,
        paymentMode: orderSuccessDetails.paymentMode,
        address: orderSuccessDetails.address,
        total: orderSuccessDetails.total,
        shippingCost: orderSuccessDetails.shippingCost,
      }});
    }, 3000);
  }, [message]);

  const retrieveOrderDetails = async (orderId) => {
    try {
      getPendingOrders(orderId).then((response) => {
        const orderDetails = response.data;
        console.log('orderDetails:', orderDetails);
        newOrderPlace(orderDetails)
      })
    } catch (error) {
      console.error('Failed to retrieve order details:', error);
    }
  }

  const newOrderPlace = (orderDetails) => {
    placeNewOrder(orderDetails).then((res) => {  
      if (res.status === 201) {
        setOrderSuccessDetails(res.data);
      }
      setMessage('Processing successful! Your order has been placed.');
    }).catch((error) => {
      console.error('Failed to place new order:', error);
      setMessage('Failed to place new order.');
    });
  };

  return (
    <div>
      <div>{message}</div>
    </div>
  );
};

export default PaymentSuccessPage;