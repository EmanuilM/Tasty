import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import authSlice from './auth-slice';
import alertSlice from './alert-slice';
import {loaderReducer} from './loader'

export const store = configureStore({
    reducer : { 
        auth: authSlice,
        alert : alertSlice,
        loader : loaderReducer
    }
}) 

export const useAppSelector = useSelector;


