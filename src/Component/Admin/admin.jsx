import React from 'react'
import styled from 'styled-components'
import DynamicInput from './dynamicInput'

const Wrapper = styled.div`

`;

const Title = styled.div`

`;
const Card = styled.div`
`;
const Lable = styled.div``;
const Button = styled.div``;

function Admin() {
  return (
    <Wrapper>
        <Title>Product upload</Title>
        <Card>
            <div>
                <Lable htmlFor="product-name">Product Name</Lable>
                <input type="text" id="product-name" name="product-name" required></input>
                <Lable htmlFor="product-price">Product Price</Lable>
                <input type="text" id="product-price" name="product-price" required></input>
                <Lable htmlFor="product-Specification">Product Specifications</Lable>
                <DynamicInput />
                <Lable htmlFor="product-description">Product Description</Lable>
                <input type="text" id="product-description" name="product-description" required></input>
                <Lable htmlFor="product-category">Product Category</Lable>
                <select id="product-category" name="product-category" required>
                    <option value="electronics">Tshirt</option>
                    <option value="clothes">Sweatshirt</option>
                    <option value="shoes">Hoodies</option>
                </select>
                <Lable>ColorToMapIndex</Lable>
                <Lable>Black</Lable><input type="number"></input>
                <Lable>White</Lable><input type="number"></input>
                <Lable htmlFor="product-image">Product Main Image</Lable>
                <input type="file" id="product-image" name="product-image" required></input>
                <Lable htmlFor="product-image">Product Image</Lable>
                <input type="file" id="product-image" name="product-image" required></input>
                <Lable htmlFor="product-image">Product Image</Lable>
                <input type="file" id="product-image" name="product-image" required></input>
                <Lable htmlFor="product-image">Product Image</Lable>
                <input type="file" id="product-image" name="product-image" required></input>

                <Button >Submit</Button>
            </div>
        </Card>

    </Wrapper>
  )
}

export default Admin