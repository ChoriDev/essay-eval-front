import { createSlice } from "@reduxjs/toolkit";

const feedback = createSlice({
  name: "feedback",
  initialState: {
    content: "",
  },
  reducers: {
    write: (state, action) => {
      state.content = action.payload.content;
    },
  },
});

export const { evaluate } = feedback.actions;
export default feedback.reducer;
