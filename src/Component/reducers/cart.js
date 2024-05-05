import { createSlice } from "@reduxjs/toolkit";

import SecureLS from 'secure-ls';
const ls = new SecureLS({ encodingType: 'aes' });


const cartItems = ls.get('cart');
const totalItems = ls.get('totalItems');
const total = ls.get('total');
const finalAmount = ls.get('saving');
// const cartItems=JSON.parse(localStorage.getItem("cart"))
// const totalItems=JSON.parse(localStorage.getItem("totalItems"));
// const total=JSON.parse(localStorage.getItem("total"));

const initialState = {
    cart: cartItems || [],
    total: total || 0,
    finalAmount:finalAmount || 0,
    totalItems: totalItems || 0,
};
// function to store cart items in local storage 
const storeCartItems=(cart,totalItems,total,finalAmount)=>{
    
    ls.set('cart', cart);
    ls.set('totalItems', totalItems);
    ls.set('total', total);
    ls.set('finalAmount', finalAmount);

    // localStorage.setItem("cart",JSON.stringify(cart));
    // localStorage.setItem("totalItems",JSON.stringify(totalItems));
    // localStorage.setItem("total",JSON.stringify(total));
}




export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, image, quantity, pic, size, color } = action.payload;
            const product = state.cart.find((item) => item.id === id && item.size === size && item.color === color);
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
                    pic,
                    color,
                    size
                });
            }

            state.totalItems=parseInt(state.totalItems)+parseInt(quantity);
            state.total += total;
            state.finalAmount=state.total;
            
            storeCartItems(state.cart,state.totalItems,state.total,state.finalAmount);
        },
        removeFromCart: (state, action) => {
            const  {id,size,color}  = action.payload;
            const product = state.cart.find((item)=>item.id===id && item.size===size && item.color===color);
            // if product then remove from cart
            if (product) {
                state.cart = state.cart.filter((item) => item.id !== id || item.size !== size || item.color !== color);
                state.totalItems=parseInt(state.totalItems)-parseInt(product.quantity);
                state.total -= product.total;
                state.finalAmount=state.total;
            }
            storeCartItems(state.cart,state.totalItems,state.total,state.finalAmount);
        },
        updateQuantity: (state, action) => {
            const {id, quantity, size, color} = action.payload;
            const product = state.cart.find((item) => item.id === id && item.size === size && item.color === color);
        
            if (quantity === 1) {
                const total = product.price * product.quantity + quantity * product.price;
                if (product) {
                    product.quantity = parseInt(product.quantity) + 1;
                    product.total = total;
                    state.totalItems = parseInt(state.totalItems) + 1;
                    state.total += product.price;
                    state.finalAmount=state.total;
                }
            }
        
            if (quantity === -1 && product) {
                if (product.quantity > 1) {
                    const total = product.price * product.quantity - product.price;
                    product.quantity = parseInt(product.quantity) - 1;
                    product.total = total;
                    state.totalItems = parseInt(state.totalItems) - 1;
                    state.total -= product.price;
                    state.finalAmount=state.total;
                } else {
                    // Remove item from cart if quantity is 1
                    state.cart = state.cart.filter((item) => item.id !== id || item.size !== size || item.color !== color);
                    state.totalItems = parseInt(state.totalItems) - 1;
                    state.total -= product.price;
                    state.finalAmount=state.total;
                }
            }
        
            storeCartItems(state.cart, state.totalItems, state.total, state.finalAmount);
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalItems = 0;
            state.total = 0;
            state.finalAmount=0;
            storeCartItems(state.cart, state.totalItems, state.total, state.finalAmount);
        },

    },
});

export const { addToCart, removeFromCart,updateQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
