import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userData',
    initialState: {user: []},
    reducers: {
        getUserData: (state, action)=>{
            state.user = action.payload;
            window.localStorage.setItem('CURRENT_USER_DATA', JSON.stringify(action.payload));
        }
    }
})

export const {getUserData} = userSlice.actions;

export default userSlice.reducer;