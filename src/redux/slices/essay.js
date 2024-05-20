import { createSlice } from "@reduxjs/toolkit";

const essay = createSlice({
  name: "essay",
  initialState: {
    originalText: "",
    correctedText: "",
  },
  reducers: {
    write: (state, action) => {
      state.originalText = action.payload.originalText;
    },
    evaluate: (state, action) => {
      state.correctedText = action.payload.correctedText;
    },
  },
});

export const { write, evaluate } = essay.actions;
export default essay.reducer;
