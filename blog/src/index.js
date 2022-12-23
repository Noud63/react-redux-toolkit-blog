import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice'
import { fetchPosts } from './features/posts/postsSlice'
import { getUsers } from './features/users/usersSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(fetchPosts())
store.dispatch(getUsers())

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Router>
            <Routes>
                <Route path='/*' element={<App />} />
            </Routes>
        </Router>
        </PersistGate>
    </Provider>
);
