import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsAPI";

const initialState ={
    relatedBlogs: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedBlogs = createAsyncThunk('blogs/relatedBlogs', async ({id, tags})=> {
    const relatedBlogs = await getRelatedBlogs(id, tags);
    return relatedBlogs;
})

const relatedBlogsSlice = createSlice({
    name: 'relatedBlogs',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchRelatedBlogs.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchRelatedBlogs.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.relatedBlogs = action.payload;
            state.isError = false;
            state.error = ''
        })
        .addCase(fetchRelatedBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
    }
})

export default relatedBlogsSlice.reducer;