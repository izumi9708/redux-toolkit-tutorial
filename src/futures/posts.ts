import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { postsData, PostData } from "../damyData";

interface InitialState {
  value: PostData[]
}

export const postSlice = createSlice({
  name: 'posts',
  initialState: { value: postsData } as InitialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostData>) => {
      state.value.push(action.payload)
    },
    deletePost:(state,action:PayloadAction<PostData>) => {
      state.value = state.value.filter(post => post.id !== action.payload.id)
    }
  }

})

export const { addPost , deletePost } = postSlice.actions;
export default postSlice.reducer;
