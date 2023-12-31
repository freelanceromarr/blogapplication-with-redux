import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchBlogs = createAsyncThunk('features/blogs', async ({filter, sorting})=>{
    const blogs = await getBlogs(filter, sorting);
    return blogs;
})
const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchBlogs.pending, (state)=>{
            state.isLoading= true;
            state.blogs = [];
            state.isError= false;
            state.error = ''
        })
        .addCase(fetchBlogs.fulfilled, (state, action)=>{
            state.isLoading= false;
            state.blogs = action.payload;
            state.isError= false;
            state.error = ''
        })
        .addCase(fetchBlogs.rejected, (state, action)=>{
            state.isLoading= false;
            state.blogs = [];
            state.isError= true;
            state.error = action.error.message;
        })
    }
})

export default blogsSlice.reducer;