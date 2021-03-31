import { types } from '../types';
import { videosQuizzes } from '../data';

const initialState = {
  videosQuizzes
}

export const videoQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.updateVideoQuiz:
      return {
        ...state,
        videosQuizzes: state.videosQuizzes.map((videoQuiz) => (videoQuiz.id === action.payload.id)
          ? { ...videoQuiz, url: action.payload.url }
          : videoQuiz
        )
      }

    default:
      return state;
  }
};