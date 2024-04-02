import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0px 10%;
    @media (max-width: 767px) {
      padding: 0px 0px 35px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 0px 0px 50px;
    }
`;

const MainSection = styled.div`
    margin: 20px 0;
    cursor: pointer;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
`;

const Heading = styled.div`
    color: #000;
    font-size: 1.5rem;
    margin: 20px 0;
`;

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    { id: 1, question: 'Is cash on delivery (COD) available?', answer: 'Yes! COD is available for orders below INR 5000 on all serviceable pin codes.' },
    { id: 2, question: 'Are there any additional charges for return/exchange? ', answer: 'We levy a charge of INR 100 for any return orders as a reverse shipment fee at the time of Refund.' },
    { id: 3, question: 'How long will my order take to arrive?', answer: 'The order usually takes 2-5 working days to reach all the metros and tier-I cities, however, for some pin codes it might take a little more time. In case of delay please get in touch at support@streetswear.in' },
    { id: 4, question: 'How would I know if my order was placed?', answer: 'You will get a confirmation of the placed order on your registered email ID and phone number. Besides, we will further notify you once it is dispatched from our warehouse.' },
    { id: 5, question: 'What happens if my shipment gets delivered late?', answer: 'In case the order does not get delivered within 7-10 working days, you can write to us at support@streetswear.in' },
    { id: 6, question: 'Are there any shipping/ handling charges on delivery?', answer: 'Yes, we charge shipping and handling fees of INR 100/- on all COD orders. (non-refundable).' },
    { id: 7, question: 'Do you ship outside the country? (India)', answer: 'At the moment, we do not deliver items outside India. However, you can make a purchase from anywhere in the world as long as the shipping address is within India.' },
    // Add more questions as needed
  ];
  const cancelationQuestions = [
    { id: 8, question: 'What happens to orders where products are received in damaged conditions?', answer: ' We try our best to deliver the right products within time, however, in a few rare cases if you receive a different/wrong product, please email us at support@streetswear.in on the website if you receive any wrong order. ' },   
    { id:9, question: 'Within how many days of purchase can I return my order?', answer: 'Return request to be raised within 7 days of the delivery date.' },
    { id:10, question: 'When will I get my refund once I return the product?', answer: 'It takes 7-10 days for the product to arrive at our warehouse after the reverse pickup is done, after which it undergoes a quality check. Once it passes the QC, the refund for return or the exchange request will be initiated within 72 hours.' },
    { id:11, question: 'How do I get my refund for prepaid orders?', answer: 'For prepaid orders, the mode of refund depends on the mode of payment for the order. The amount will be credited to your account within 2-3 working days. If not, please get in touch with your respective bank.' },
    { id:12, question: 'How do I get my refund for COD orders?', answer: 'Order placed through cash on delivery will be refunded through fund transfer to the customers bank account.' },
    // Add more questions as needed
    ]; 
 
  const handleClick = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <Wrapper>
      <h1>Frequently Asked Questions</h1>
      <Heading>Genral Question</Heading>
      {questions.map((q) => (
        <MainSection key={q.id}>
          <h2 onClick={() => handleClick(q.id)}>{q.question}</h2>
          <div className={`answer ${selectedQuestion === q.id ? 'open' : ''}`}>
          <p>{q.answer}</p>
          </div>
        </MainSection>
      ))}
      <Heading>CANCELLATION, RETURN / EXCHANGE & REFUND</Heading>
      {cancelationQuestions.map((q) => (
        <MainSection key={q.id}>
          <h2 onClick={() => handleClick(q.id)}>{q.question}</h2>
          {selectedQuestion === q.id && <p>{q.answer}</p>}
        </MainSection>
      ))}
    </Wrapper>
  );
};

export default Faq;