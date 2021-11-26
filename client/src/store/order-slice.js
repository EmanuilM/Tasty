import { createSlice } from '@reduxjs/toolkit';

const initialOrderSlice = [];

const orderSlice = createSlice({
    name: 'order-slice',
    initialState: initialOrderSlice,
    reducers: {
        addProduct(state, action) {
            let values = [];
            const data = JSON.parse(localStorage.getItem('orders'));
            let isExists = false;

            if (!data || data.length <= 0) {
                if (action.payload) {
                    values.push(action.payload);
                    localStorage.setItem("orders", JSON.stringify(values));
                    state = JSON.parse(localStorage.getItem('orders'));
                }
            } else {
                data?.map(x => {

                    if (x._id === action.payload._id) {
                        isExists = true;
                        x.quantity += action.payload.quantity;
                        localStorage.setItem('orders', JSON.stringify(data));
                        state = JSON.parse(localStorage.getItem('orders'));
                    }

                    if (!isExists) {
                        isExists = true;
                        data.push(action.payload);
                        localStorage.setItem("orders", JSON.stringify(data));
                        state = JSON.parse(localStorage.getItem('orders'));
                    }

                })

            }
            return state;
        },
        removeProduct(state, action) {
            state = JSON.parse(localStorage.getItem('orders'));
            for (let index = 0; index < state.length; index++) {
                if (state[index]._id === action.payload) {
                    state.splice(state.indexOf(state[index]), 1);
                    localStorage.setItem('orders', JSON.stringify(state));
                    break;
                }
            }

            return state;
        },
        getProducts(state) {
            return state = JSON.parse(localStorage.getItem('orders'));

        },
        increateProductQuantity(state, action) {
            state = JSON.parse(localStorage.getItem('orders'));
            for (let index = 0; index < state.length; index++) {
                if (state[index]._id === action.payload) {
                    state[index].quantity += 1;
                    localStorage.setItem('orders', JSON.stringify(state));
                    break;
                }
            }
            return state;
        },
        decreseProductQuantity(state, action) {
            state = JSON.parse(localStorage.getItem('orders'));
            state.map(x => {
                if (x._id === action.payload) {
                    if (x.quantity <= 1) {
                        x.quantity = 1;
                    } else {
                        x.quantity -= 1;
                    }
                    localStorage.setItem('orders', JSON.stringify(state));
                }
            })
            return state;
        },
        clearOrderState(state) {
            state = JSON.parse(localStorage.getItem('orders'));
            state.splice(0);
            localStorage.setItem('orders', JSON.stringify(state));
            return state;
        }
    }
})

export const {
    addProduct,
    removeProduct,
    getProducts,
    increateProductQuantity,
    decreseProductQuantity,
    clearOrderState
} = orderSlice.actions;

export default orderSlice.reducer;