import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Upper = styled.div`
display: flex;
`;
const Section1 = styled.div``;
const Section2 = styled.div``;
const Frame = styled.img``;
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
const Quantity = styled.div`
display: flex;
`;
const Minus = styled.button`
width: 50px;
height: 50px;
border: 1px solid black;
`;
const Number = styled.div`
width: 50px;
height: 49px;
text-align: center;
border: 1px solid black;
`;
const Plus = styled.button`
width: 50px;
height: 50px;
border: 1px solid black;

`;

function Product() {
    return (
        <Wrapper>
        <Upper>
        <Section1>
            <Frame src='./whatsnew2.jpg'/>
        </Section1>
        <Section2>
            <Tittle>Papier</Tittle>
            <Description>Design by </Description>
            <Price>${50}</Price>
            <Specification>Many people think of moths as mysterious, nocturnal, knock-off butterfliesthat is, until they see this eye-catching creature. The legendary Luna Moth is beloved for its beautifully bright color and stunning size. And since it has a rather short lifespan, the marvelous moth is widely seen as a symbol of the beauty and brevity of life.</Specification>
            <Text>Quantity</Text>
            <Quantity>
                <Minus>-</Minus>
                <Number>{10}</Number>
                <Plus>+</Plus>   
            </Quantity>
        </Section2>
        </Upper>
        </Wrapper>
    );
}

export default Product;
