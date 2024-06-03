import { createSlice } from "@reduxjs/toolkit";

const essay = createSlice({
  name: "essay",
  initialState: {
    originalText: "",
    correctedText: "",
    wrongSpelling: [],
    wrongSpacing: [],
    org3Score: 0,
    org3Comment: "",
  },
  reducers: {
    write: (state, action) => {
      state.originalText = action.payload.originalText;
    },
    evaluate: (state, action) => {
      state.correctedText = action.payload.correctedText;
      state.wrongSpelling = action.payload.wrongSpelling;
      state.wrongSpacing = action.payload.wrongSpacing;
      state.org3Score = action.payload.org3Score;
      state.org3Comment = action.payload.org3Comment;
    },
  },
});

export const { write, evaluate } = essay.actions;
export default essay.reducer;
