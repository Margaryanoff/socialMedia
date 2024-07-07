import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";
import { contactReducer } from "./contacts/contactsSlice";
import { cooperationReducer } from "./cooperation/cooperationSlice";
import { feedbackReducer } from "./feedback/feedbackSlice";
import { singleUserReducer } from "./singleUser/singleUserSlice";
import { allPostsReducer } from "./allPosts/allPostsSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        contacts: contactReducer,
        cooperation: cooperationReducer,
        feedback: feedbackReducer,
        singleUser: singleUserReducer,
        allPosts: allPostsReducer,
    },
});

export default store;
