import { combineReducers } from "redux";

import { videoQuizReducer } from "./videoQuizReducer";

export const rootReducer = combineReducers({
  videoQuiz: videoQuizReducer
});