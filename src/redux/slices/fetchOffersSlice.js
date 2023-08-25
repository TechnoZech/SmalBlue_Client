import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOffers = createAsyncThunk('fetchOffers', async ()=>{
    const response = await axios.get("/offer");
    return response.data;
})

const fetchOffersSlice = createSlice({
    name: 'AllOffers',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchOffers.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchOffers.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchOffers.rejected, (state, action)=>{
            console.log('Error', action.payload);
            state.isError = true;
        })
    }
})
export default fetchOffersSlice.reducer;