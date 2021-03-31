const getVideoQuizById = (id, videosQuizzes) => videosQuizzes.find((videoQuiz) => videoQuiz.id === id);

export {
  getVideoQuizById
}