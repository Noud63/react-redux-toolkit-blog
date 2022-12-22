import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import axios from 'axios'


export const loginUser = createAsyncThunk(
    'loggedinUser/login', async (loginData, thunkAPI) => {
        try {
            const response = await axios.post('/login', loginData)
            // console.log(response.data)
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


const initialState = {
    loggedInUser: {},
    isLoading: false,
    isLoggedIn: false,
    isError: false,
    message: ''
}

const loginSlice = createSlice({
    name: 'loggedinUser',
    initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isLoggedIn = true
            state.loggedInUser = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.loggedInUser = {}
        })
    }


})

export const { resetState } = loginSlice.actions
export default loginSlice.reducer