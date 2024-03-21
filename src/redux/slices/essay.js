import { createSlice } from "@reduxjs/toolkit";

const essay = createSlice({
  name: "essay",
  initialState: {
    content: "",
  },
  reducers: {
    save: (state, action) => {
      state.content = action.payload.content;
    },
  },
});

export const { save } = essay.actions;
export default essay.reducer;
