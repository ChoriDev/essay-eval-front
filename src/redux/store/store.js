import { configureStore } from "@reduxjs/toolkit";
import essay from "../slices/essay";

// state를 저장할 store 생성
const store = configureStore({
  reducer: {
    essay,
  },
});

export default store;
