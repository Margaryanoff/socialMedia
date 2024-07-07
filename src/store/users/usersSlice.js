import { createSlice } from "@reduxjs/toolkit";
import {
    fetchGetUsers,
    fetchPatchHandleRequest,
    fetchPatchUserNewPasswordGlobalServer,
    fetchPostRegisteredUser,
    getRequestedUser,
} from "./API";
const usersSlice = createSlice({
    name: "users",
    initialState: {
        dataUsers: [],
        // singleUserRequest: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchPostRegisteredUser.fulfilled, (state, { payload }) => {
            state.dataUsers.push(payload);
          })
          .addCase(fetchGetUsers.fulfilled, (state, { payload }) => {
            state.dataUsers = payload;
          })
          .addCase(fetchPatchUserNewPasswordGlobalServer.fulfilled, (state, { payload }) => {
            const passwordChangedUser = state.dataUsers.find((elm) => elm.id === payload.id);
            passwordChangedUser.password = payload.data;
          })
          // .addCase(getRequestedUser.fulfilled, (state, { payload }) => {
          //     state.singleUserRequest = payload;
          // })
          .addCase(fetchPatchHandleRequest.fulfilled, (state, { payload }) => {
          
            return state;
          });
    },
});

export const usersReducer = usersSlice.reducer;
export const selectUsers = (state) => state.users;
export const {} = usersSlice.actions;
