import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../hook/UseRequest";

export const fetchPostContactFeedback = createAsyncThunk(
    "contacts/fetchPostContactFeedback",
    async (payload) => {
        const { POST } = UseRequest();
        const result = POST("http://localhost:8080/contactUs", payload);
    }
);
