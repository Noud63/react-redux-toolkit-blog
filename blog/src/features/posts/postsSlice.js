import { 
    createSlice, 
    createAsyncThunk, 
    createSelector,
} from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import axios from 'axios'



const initialState = {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
}


export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts', async () => {
        try {
            const response = await axios.get('/posts')
            return response.data
        } catch (error) {
            return error.message
        }
    })


export const addNewPost = createAsyncThunk(
    'posts/addNewPost', async (initialPost) => {
        try {
            const response = await axios.post('/posts', initialPost)
            return response.data
        } catch (error) {
            return error.message
        }
    })

export const updatePost = createAsyncThunk(
    'posts/updatePost', async (initialPost) => {
        // console.log(initialPost)
        const { id } = initialPost
        try {
            const response = await axios.put(`/posts/${id}`, initialPost)
            return response.data
        } catch (error) {
            return error.message
        }
    })


export const deletePost = createAsyncThunk(
    'posts/deletePost', async (initialPost) => {
        const { id } = initialPost
        try {
            const response = await axios.delete(`/posts/${id}`)
             return response.data
        } catch (error) {
            return error.message
        }
    })


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
       
        reactionAdded(state, action) {
            const { id, reaction } = action.payload
            const existingPost = state.posts.find(post => post._id === id)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }

        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            //Adding date and reactions
            let min = 1;
            const loadedPosts = action.payload.map(post => {
                post.date = sub(new Date(), { minutes: min++ }).toISOString()
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                }
                return post
            });
            state.posts = state.posts.concat(loadedPosts)
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        });
        builder.addCase(addNewPost.fulfilled, (state, action) => {
            action.payload.userId = Number(action.payload.userId)
            action.payload.date = new Date().toISOString()
            action.payload.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            }
            console.log(action.payload)
            state.posts.unshift(action.payload)
        });
        builder.addCase(updatePost.fulfilled, (state, action) => {
            if (!action.payload._id) {
                console.log('Update could not complete')
                return
            }
            const { _id } = action.payload
            action.payload.date = new Date().toISOString()
            const posts = state.posts.filter(post => post._id !== _id)
            state.posts = [...posts, action.payload]  //update state.posts with new post
        })
        builder.addCase(deletePost.fulfilled, (state, action) => {
            if(!action.payload?.id) {
                console.log('Delete could not complete')
                return
            }
            console.log(action.payload.id)
            const id = action.payload.id;
            const posts = state.posts.filter( post => post._id !== id)
            state.posts = posts
        })
    }
})

export const selectAllPosts = state => state.posts.posts;
export const getPostsStatus = state => state.posts.status;
export const getPostsError = state => state.posts.error;

export const selectPostById = (state, id) => state.posts.posts.find(post => post._id === id)

export const selectPostByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.userId === userId) 
)


export const { increaseCount, postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer



