export type FetchQuestionObj = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  allAnswers: string[];
};

export type QuestionObj = {
  question: string;
  correct_answer: string;
  allAnswers: string[];
};
export type AnswersObj = {
  question: string;
  selectedAnswer: string;
};

export type RouteItem = {
  path: string;
  element: JSX.Element;
};

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;
export type MouseEventType = React.MouseEvent<Element, MouseEvent>;
