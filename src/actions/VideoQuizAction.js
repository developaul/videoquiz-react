import { types } from "../types";

export const startUpdateVideoQuiz = videoQuiz => ({
  type: types.updateVideoQuiz,
  payload: videoQuiz
});

export const startDeleteVideoQuiz = id => ({
  type: types.deleteVideoQuiz,
  payload: id
});