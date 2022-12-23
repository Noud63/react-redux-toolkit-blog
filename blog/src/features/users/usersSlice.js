import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    isSuccess : false
}

export const getUsers = createAsyncThunk(
    'users/getUsers', async () => {
        try {
            const response = await axios.get('/users')
            console.log(response.data)
            return response.data
        } catch (error) {
            return error.message
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.users = action.payload
            console.log(action.payload)
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.users = []
        })
    }
})


export default usersSlice.reducer