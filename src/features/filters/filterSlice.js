import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    filter: '',
    sorting: ''
}
export const filterSlice = createSlice({
    name: 'filters-sorting',
    initialState,
    reducers: {
        filter: (state, action)=>{
            state.filter = action.payload;
        },
        sorting: (state, action)=>{
            state.sorting = action.payload;
        }
    }
})

export default filterSlice.reducer;
export const {filter, sorting} = filterSlice.actions;