import { createSlice } from "@reduxjs/toolkit";

import SecureLS from 'secure-ls';
const ls = new SecureLS({ encodingType: 'aes' });


const cartItems = ls.get('cart');
const totalItems = ls.get('totalItems');
const total = ls.get('total');
// const cartItems=JSON.parse(localStorage.getItem("cart"))
// const totalItems=JSON.parse(localStorage.getItem("totalItems"));
// const total=JSON.parse(localStorage.getItem("total"));

const initialState = {
    cart: cartItems || [],
    total: total || 0,
    totalItems: totalItems || 0,
};
// function to store cart items in local storage 
const storeCartItems=(cart,totalItems,total)=>{
    
    ls.set('cart', cart);
    ls.set('totalItems', totalItems);
    ls.set('total', total);

    // localStorage.setItem("cart",JSON.stringify(cart));
    // localStorage.setItem("totalItems",JSON.stringify(totalItems));
    // localStorage.setItem("total",JSON.stringify(total));
}




export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, image,quantity,pic } = action.payload;
            const product = state.cart.find((item) => item.id === id);
            const total= price*quantity;
            
            if (product) {
                // convert to int
                product.quantity=parseInt(product.quantity)+parseInt(quantity);
                product.total=parseInt(product.total)+parseInt(total); 
            } else {
                state.cart.push({
                    id,
                    title,
                    price,
                    image,
                    quantity,
                    total,
                    pic
                });
            }

            state.totalItems=parseInt(state.totalItems)+parseInt(quantity);
            state.total += total;
            storeCartItems(state.cart,state.totalItems,state.total);
        },
        removeFromCart: (state, action) => {
            const  id  = action.payload;
            const product = state.cart.find((item) => item.id === id);
            console.log("pra",product)
            // if product then remove from cart

            if (product) {
                state.cart = state.cart.filter((item) => item.id !== id);
                state.totalItems=parseInt(state.totalItems)-parseInt(product.quantity);
                state.total -= product.total;
            }
            storeCartItems(state.cart,state.totalItems,state.total);
        },
        updateQuantity:(state,action)=>{
            const {id,quantity}=action.payload;
            const product = state.cart.find((item)=>item.id===id);
            if(quantity===1){
                const total=product.price*product.quantity+quantity*product.price;
            if(product){
                product.quantity=parseInt(product.quantity)+1;
                product.total=total;
                state.totalItems=parseInt(state.totalItems)+1;
                state.total += product.price;
            }}
            if(quantity===-1){
                const total=product.price*product.quantity-product.price;
                if(product){
                    product.quantity=parseInt(product.quantity)-1;
                    product.total=total;
                    state.totalItems=parseInt(state.totalItems)-1;
                    state.total-=product.price;
                }}
                storeCartItems(state.cart,state.totalItems,state.total);
            }

    },
});

export const { addToCart, removeFromCart,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
