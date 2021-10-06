import { createSlice } from '@reduxjs/toolkit';

const initialAuthSate = { 
    isAuthenticated : false , 
    userAuthState : { 
        accessToken : null,
        _id : null,
        username : null,
        isAdmin : false,
        isWorker : false,
    }
}

const authSlice = createSlice({
    name: 'auth-slice',
    initialState :initialAuthSate,
    reducers : { 
        handleAuthenticate(state , action) { 
            state.userAuthState = { 
                accessToken : action.payload.accessToken,
                _id : action.payload._id,
            }
            state.isAuthenticated = true;
        },
        handleLogOut(state) { 
            state.userAuthState = { 
                accessToken : null,
                _id : null,
            }
            state.isAuthenticated = false;
        },
        setUserState(state , action) { 
            state.isAuthenticated = action.payload.isAuthenticated;
            state.userAuthState = action.payload.userAuthState;
        }
    }
});
export const { handleAuthenticate , handleLogOut , setUserState } = authSlice.actions


export default authSlice.reducer;
