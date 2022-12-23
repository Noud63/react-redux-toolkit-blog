import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import registerReducer from '../features/registerSlice'
import loginReducer from '../features/loginSlice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['users', 'posts']
}

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    registereduser: registerReducer,
    loggedinuser: loginReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer )

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)