import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    total: 0,
    totalItems: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, image,quantity } = action.payload;
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
                });
            }

            state.totalItems=parseInt(state.totalItems)+parseInt(quantity);
            state.total += total;
        },
        removeFromCart: (state, action) => {
            const  id  = action.payload;
            const product = state.cart.find((item) => item.id === id);
            // if product then remove from cart

            if (product) {
                state.cart = state.cart.filter((item) => item.id !== id);
                state.totalItems=parseInt(state.totalItems)-parseInt(product.quantity);
                state.total -= product.total;
            }
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
        }

    },
});

export const { addToCart, removeFromCart,updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
