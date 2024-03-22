import { createSlice } from "@reduxjs/toolkit";

const essay = createSlice({
  name: "essay",
  initialState: {
    essayContent: "",
  },
  reducers: {
    write: (state, action) => {
      state.essayContent = action.payload.essayContent;
    },
  },
});

export const { write } = essay.actions;
export default essay.reducer;
