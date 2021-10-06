import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import authSlice from './auth-slice';

export const store = configureStore({
    reducer : { 
        auth: authSlice,
    }
}) 

export const useAppSelector = useSelector;


