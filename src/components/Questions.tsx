import { AnswersObj, MouseEventType, QuestionObj, SetStateAction } from "../types";
import Question from "./Question";

type Props = {
  questionsData: QuestionObj[];
  setAnswers: SetStateAction<AnswersObj[]>;
  checkTokenAnswers: boolean;
};

export default function Questions({ checkTokenAnswers, setAnswers, questionsData }: Props) {
  const setAnswer = (question: string, e: MouseEventType): void => {
    const target = e.target as HTMLElement;

    setAnswers((prevAnswers) => {
      const currQuestionIndex = prevAnswers.findIndex((x) => x.question === question);
      const answerObj = {
        question: question,
        selectedAnswer: target.innerText,
      };

      prevAnswers.splice(currQuestionIndex, 1, answerObj);
      return prevAnswers;
    });
  };

  return (
    <div className="questions">
      {questionsData.map((questionObj: QuestionObj) => {
        return (
          <div key={questionObj.correct_answer} className="question">
            <Question setAnswer={setAnswer} checkTokenAnswers={checkTokenAnswers} questionObj={questionObj} />
          </div>
        );
      })}
    </div>
  );
}
