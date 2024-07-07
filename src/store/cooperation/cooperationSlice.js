import { createSlice } from "@reduxjs/toolkit";
import { fetchCooperationRequest } from "./API";

const cooperationSlice = createSlice({
    name: "cooperation",
    initialState: { isLoading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCooperationRequest.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchCooperationRequest.pending, (state) => {
                state.isLoading = true;
            });
    },
});

export const cooperationReducer = cooperationSlice.reducer;
export const selectCooperation = (state) => state.cooperation;
