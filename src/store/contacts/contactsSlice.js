import { createSlice } from "@reduxjs/toolkit";
import { fetchPostContactFeedback } from "./API";

const contactSlice = createSlice({
    name: "contacts",
    initialState: { isLoading: false},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostContactFeedback.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchPostContactFeedback.pending, (state) => {
                state.isLoading = true;
            });
    },
});

export const contactSelector = (state) => state.contacts;
export const contactReducer = contactSlice.reducer;
