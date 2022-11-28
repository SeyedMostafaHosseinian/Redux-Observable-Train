import {createSlice} from "@reduxjs/toolkit";

const initialState: {
    loading: boolean;
    posts: Record<string, any>[];
    error: string;
} = {
    loading: false,
    posts: [],
    error: "",
};
const slice = createSlice({
    name: "getPosts",
    initialState,
    reducers: {
        sendRequest: (state, action: { type: string }) => {
            state.loading = true;
        },
        requestSuccess: (state, action: { type: string, payload:Record<string, any>[] }) => {
            state.loading = false;
            state.posts = action.payload;
        },
        requestFailure: (state, action: { type: string, payload: string }) => {
            state.loading = false
            state.error = action.payload
        },
    },
});
export const getPostsFeature = {
    actions: slice.actions,
    reducer: slice.reducer,
};
