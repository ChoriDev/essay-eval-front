import { createSlice } from "@reduxjs/toolkit";

const essay = createSlice({
  name: "essay",
  initialState: {
    originalText: "",
    correctedText: "",
    wrongSpelling: [],
    wrongSpacing: [],
  },
  reducers: {
    write: (state, action) => {
      state.originalText = action.payload.originalText;
    },
    evaluate: (state, action) => {
      state.correctedText = action.payload.correctedText;
      state.wrongSpelling = action.payload.wrongSpelling;
      state.wrongSpacing = action.payload.wrongSpacing;
    },
  },
});

export const { write, evaluate } = essay.actions;
export default essay.reducer;
