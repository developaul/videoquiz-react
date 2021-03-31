import { types } from "../types";

export const startUpdateVideoQuiz = videoQuiz => ({
  type: types.updateVideoQuiz,
  payload: videoQuiz
});
