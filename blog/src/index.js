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
import { persistor } from '../src/app/store';

const container = document.getElementById('root');
const root = createRoot(container);

// store.dispatch(fetchUsers())
store.dispatch(fetchPosts())
store.dispatch(getUsers())

root.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path='/*' element={<App />} />
            </Routes>
        </Router>
    </Provider>
);
