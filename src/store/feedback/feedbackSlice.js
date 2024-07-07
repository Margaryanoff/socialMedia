import { createSlice } from "@reduxjs/toolkit";
import { fetchGetFeedback } from "./API";

const feedbackSlice = createSlice({
    name: "feedback",
    initialState: {
        feedback: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetFeedback.fulfilled, (state, { payload }) => {
            state.feedback = payload;
        });
    },
});

export const feedbackReducer = feedbackSlice.reducer;
export const selectFeedback = (state) => state.feedback;
