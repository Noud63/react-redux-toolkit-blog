import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: []
}

export const getUsers = createAsyncThunk(
    'users/getUsers', async () => {
        try {
            const response = await axios.get('/users')
            return response.data
        } catch (error) {
            return error.message
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users
export const selectUserById = (state, id) => state.users.find( user => user.id === id)

export default usersSlice.reducer