import { types } from '../types';
import { videosQuizzes } from '../data';

const initialState = {
  videosQuizzes
}


export const videoQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.updateVideoQuiz:
      console.log(action.payload);
      return {
        ...state,
        videosQuizzes: state.videosQuizzes.map((videoQuiz) => {

          const newVideoQuiz = (videoQuiz.id === action.payload.id)
            ? { ...videoQuiz, url: action.payload.url }
            : videoQuiz;

          console.log(newVideoQuiz);

          return (
            (videoQuiz.id === action.payload.id)
              ? { ...videoQuiz, url: action.payload.url }
              : videoQuiz
          )
        })
      }

    default:
      return state;
  }
};