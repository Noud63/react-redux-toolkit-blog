import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import registerReducer from '../features/registerSlice'
import loginReducer from '../features/loginSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        registereduser: registerReducer,
        loggedinuser: loginReducer
    }
})
