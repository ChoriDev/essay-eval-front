import { createSlice } from "@reduxjs/toolkit";

const essay = createSlice({
  name: "essay",
  initialState: {
    content: "",
  },
  reducers: {
    write: (state, action) => {
      state.content = action.payload.content;
    },
  },
});

export const { write } = essay.actions;
export default essay.reducer;
