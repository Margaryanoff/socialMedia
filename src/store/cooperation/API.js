import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../hook/UseRequest";

export const fetchCooperationRequest = createAsyncThunk(
    "cooperation/fetchCooperationRequest",
    async (payload) => {
        const { POST } = UseRequest();
        const result = POST("http://localhost:8080/cooperation", payload);
    }
);
