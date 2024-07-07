import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../hook/UseRequest";
const { POST, GET, PATCH } = UseRequest();

export const fetchPostRegisteredUser = createAsyncThunk("users/fetchPostRegisteredUser", async (payload) => {
  const result = POST("http://localhost:8080/users", payload);
  return payload;
});

export const fetchGetUsers = createAsyncThunk("users/fetchGetUsers", async () => {
  const result = await GET("http://localhost:8080/users");
  return result;
});

export const fetchPatchUserNewPasswordGlobalServer = createAsyncThunk("singleUser/fetchPatchUserNewPassword", async ({ data, id }) => {
  const resultGlobal = PATCH(`http://localhost:8080/users`, id, data);
  return resultGlobal;
});
export const fetchPatchHandleRequest = createAsyncThunk("users/fetchPatchHandleRequest", async ({ singleUserId, friend }) => {
  const result = await PATCH(`http://localhost:8080/users`, friend?.id, {
    followRequests: [...friend.followRequests, singleUserId],
  });
});
