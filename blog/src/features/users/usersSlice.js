import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []
    
// export const fetchUsers = createAsyncThunk( 
//     'users/fetchUsers', async () => {
//         try {
//             const users = await axios.get(USERS_URL)
//             return users.data
//         } catch (error) {
//             return error.message
//         }
//     }
// )

export const getUsers = createAsyncThunk(
    'users/getUsers', async () => {
        try {
            const data = await axios.get('/users')
            console.log(data.data.users)
            return data.data.users
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
        // builder.addCase(fetchUsers.fulfilled, (state, action) => {
        //     return action.payload
        // }) 
        builder.addCase(getUsers.fulfilled, (state, action) => {
            console.log(action.payload)
            return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users
export const selectUserById = (state, userId) => state.users.find( user => user.id === userId)

export default usersSlice.reducer