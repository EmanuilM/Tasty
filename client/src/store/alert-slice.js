import { createSlice } from "@reduxjs/toolkit";

const initialAlertState = { 
    shown : false,
    message : '',
}


const alertSlice = createSlice({
    name : 'alert-slice',
    initialState : initialAlertState,
    reducers : { 
        showAlert(state , action) { 
            state.shown = true;
            state.message = action.payload;
        },
        clearAlert(state) { 
            state.shown = false;
            state.message = '';
        }
    }
})

export const { showAlert , clearAlert } = alertSlice.actions;
export default alertSlice.reducer;