import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBlog, updateBookmark, updateLikes } from "./blogAPI"

const initialState = {
    blog: {},
    isLoadding: false,
    isError: false,
    error: ''
}

export const fetchBlog = createAsyncThunk('blog/fetch', async ({id})=>{
    const blog = await getBlog(id);
    return blog;
})

//save
export const bookmarkBlog = createAsyncThunk('blog/bookmark', async (currentBlog)=>{
    const blog = await updateBookmark(currentBlog);
    return blog;
})
 //lies
export const changeLikes = createAsyncThunk('blog/likes', async (currentBlog)=>{
    const blog = await updateLikes(currentBlog);
    return blog;
})

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: (builder)=>{
        builder
        .addCase(fetchBlog.pending, (state)=>{
            state.isLoadding = true;
            state.blog = {};
            state.isError = false;
            state.error = '';
        })
        .addCase(fetchBlog.fulfilled, (state, action)=>{
            state.isLoadding = false;
            state.blog = action.payload;
            state.isError = false;
            state.error = '';
        })
        .addCase(fetchBlog.rejected, (state, action)=>{
            state.isLoadding = false;
            state.blog = {};
            state.isError = true;
            state.error = action.error.message;
        })
        .addCase(bookmarkBlog.pending, (state)=>{
            state.isLoadding = true;
            state.isError = false;
            state.error = '';
        })
        .addCase(bookmarkBlog.fulfilled, (state, action)=>{
            state.isLoadding = false;
            state.blog = action.payload;
            state.isError = false;
            state.error = '';
        })
        .addCase(bookmarkBlog.rejected, (state, action)=>{
            state.isLoadding = false;
            state.isError = true;
            state.error = action.error.message;
        })
        .addCase(changeLikes.pending, (state)=>{
            state.isLoadding = true;
            state.isError = false;
            state.error = '';
        })
        .addCase(changeLikes.fulfilled, (state, action)=>{
            state.isLoadding = false;
            state.blog = action.payload;
            state.isError = false;
            state.error = '';
        })
        .addCase(changeLikes.rejected, (state, action)=>{
            state.isLoadding = false;
            state.isError = true;
            state.error = action.error.message;
        })
    }
})

export default blogSlice.reducer;