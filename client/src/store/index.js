import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import authSlice from './auth-slice';
import alertSlice from './alert-slice';
import {loaderReducer} from './loader'
import orderSlice from './order-slice';

export const store = configureStore({
    reducer : { 
        auth: authSlice,
        alert : alertSlice,
        loader : loaderReducer,
        order : orderSlice
    }
}) 

export const useAppSelector = useSelector;


