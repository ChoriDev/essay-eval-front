import { createSlice } from "@reduxjs/toolkit";

const essay = createSlice({
  name: "essay",
  initialState: {
    content: "",
    feedback: "",
  },
  reducers: {
    write: (state, action) => {
      state.content = action.payload.content;
    },
    evaluate: (state, action) => {
      state.feedback = action.payload.feedback;
    },
  },
});

export const { write, evaluate } = essay.actions;
export default essay.reducer;
