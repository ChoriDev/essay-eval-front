import { createSlice } from "@reduxjs/toolkit";

const essay = createSlice({
  name: "essay",
  initialState: {
    originalText: "",
    correctedText: "",
    wrongSpelling: [],
    wrongSpacing: [],
    cont1Score: 0,
    cont1Comment: "",
    cont2Score: 0,
    cont2Comment: "",
    exp2Score: 0,
    exp2Comment: "",
    exp3Score: 0,
    exp3Comment: "",
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
      state.cont1Score = action.payload.cont1Score;
      state.cont1Comment = action.payload.cont1Comment;
      state.cont2Score = action.payload.cont2Score;
      state.cont2Comment = action.payload.cont2Comment;
      state.exp2Score = action.payload.exp2Score;
      state.exp2Comment = action.payload.exp2Comment;
      state.exp3Score = action.payload.exp3Score;
      state.exp3Comment = action.payload.exp3Comment;
      state.org3Score = action.payload.org3Score;
      state.org3Comment = action.payload.org3Comment;
    },
  },
});

export const { write, evaluate } = essay.actions;
export default essay.reducer;
