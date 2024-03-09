import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PaymentSuccessPage = () => {
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get('orderId');

  useEffect(() => {
    if (orderId) {
      retrieveOrderDetails(orderId);
    }
  }, [orderId]);

  const retrieveOrderDetails = async (orderId) => {
    try {
      const response = await axios.get(`/api/orders/${orderId}`);
      const orderDetails = response.data;
      newOrderPlace(orderDetails);
    } catch (error) {
      console.error('Failed to retrieve order details:', error);
    }
  };

  const newOrderPlace = (orderDetails) => {
    // Your order placement logic here, using the orderDetails
  };

  return (
    <div>
      <h1>Payment Successful</h1>
      {/* You can display some information about the order here */}
    </div>
  );
};

export default PaymentSuccessPage;