import { configureStore } from "@reduxjs/toolkit";
import essay from "../slices/essay";
import feedback from "../slices/feedback";

// state를 저장할 store 생성
const store = configureStore({
  reducer: {
    essay,
    feedback,
  },
});

export default store;
