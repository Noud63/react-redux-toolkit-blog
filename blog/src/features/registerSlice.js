import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import axios from 'axios'


export const registerUser = createAsyncThunk(
   'registeredUser/register', async(user, thunkAPI)=> {
        try {
            const response = await axios.post( '/register', user) 
            return response.data
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
   }
)

const initialState = {
    registeredUser : {},
    isLoading: false,
    isRegistered: false,
    isError: false,
    message: ''
}

const registerSlice = createSlice({
    name: 'registeredUser',
    initialState,
    reducers: {
        resetState: () => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
                 state.isLoading = true
        })
        builder.addCase(registerUser.fulfilled, ( state, action) => {
            state.isLoading = false
            state.isRegistered = true
            state.registeredUser = action.payload
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.registerUser = {}
        })
    }

    
})

export const { resetState } = registerSlice.actions
export default registerSlice.reducer