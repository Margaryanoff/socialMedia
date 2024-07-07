import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../hook/UseRequest";
const { POST, DELETE, GET, PATCH } = UseRequest();

export const fetchPostSingleUser = createAsyncThunk("singleUser/fetchPostSingleUser", async (payload) => {
  const result = await POST("http://localhost:8080/singleUser", payload);
  return result;
});

export const fetchGetSingleUser = createAsyncThunk("singleUser/fetchGetSingleUser", async () => {
  const result = await GET("http://localhost:8080/singleUser");
  return result;
});

export const fetchDeleteSingleUser = createAsyncThunk("singleUser/fetchDeleteSingleUser", async (payload) => {
  const result = await DELETE(`http://localhost:8080/singleUser/${payload.id}`);
  return result;
});
export const fetchPatchSingleUserNewPost = createAsyncThunk("singleUser/fetchPutSingleUserNewPost", async (payload, posts) => {
  const result = await PATCH(`http://localhost:8080/singleUser`, payload.id, posts);
  return result;
});

export const fetchChangeSinglUserPersonalInfo = createAsyncThunk("singleUser/fetchChangeSinglUserPersonalInfo", async ({ data, id }) => {
  const result = await PATCH(`http://localhost:8080/singleUser`, id, data);
  const result2 = await PATCH(`http://localhost:8080/users`, id, data);
  return result;
});

export const fetchPatchUserSocialInfo = createAsyncThunk("singleUser/fetchPatchUserSocialInfo", async ({ data, id }) => {
  const result = await PATCH(`http://localhost:8080/singleUser`, id, data);
  return result;
});

export const fetchPatchUserImage = createAsyncThunk("singleUser/fetchPatchUserImages", ({ id, image }) => {
  const result = PATCH(`http://localhost:8080/singleUser`, id, { profileImage: image });
  return result;
});
export const fetchPatchUserNewPassword = createAsyncThunk("singleUser/fetchPatchUserNewPassword", async ({ data, id }) => {
  const result = PATCH(`http://localhost:8080/singleUser`, id, data);
  return result;
});

export const handleRejectedFriendRequest = createAsyncThunk("singleUser/handleRejectedFriendRequest", async ({ id, data }) => {
  const result = await PATCH("http://localhost:8080/singleUser", id, { followRequests: data });
  return result;
});
