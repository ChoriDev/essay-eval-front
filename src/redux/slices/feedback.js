import { createSlice } from "@reduxjs/toolkit";

const feedback = createSlice({
  name: "feedback",
  initialState: {
    feedbackContent: "",
  },
  reducers: {
    evaluate: (state, action) => {
      state.feedbackContent = action.payload.feedbackContent;
    },
  },
});

export const { evaluate } = feedback.actions;
export default feedback.reducer;
