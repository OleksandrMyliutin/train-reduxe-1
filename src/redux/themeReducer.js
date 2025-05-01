import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    mode: 'dark',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        toggleTemplate:(state) =>{
            state.mode = state.mode === 'dark' ? 'light' : 'dark';

        }
    }
});
export const themeReducer = themeSlice.reducer;
export const { toggleTemplate } = themeSlice.actions;