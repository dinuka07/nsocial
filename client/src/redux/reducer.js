import { combineReducers } from "@reduxjs/toolkit";

import userslice from "./postSlice";
import themeSlice from "./theme";
import postSlice from "./postSlice";

const rootReducer = combineReducers({
    user: userslice,
    theme: themeSlice,
    posts: postSlice,
});

export { rootReducer};