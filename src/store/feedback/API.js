import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../hook/UseRequest";

export const fetchGetFeedback = createAsyncThunk(
    "feedback/fetchGetFeedback",
    async () => {
        const { GET } = UseRequest();
        const result = GET("http://localhost:8080/feedback");

        return result;
    }
);