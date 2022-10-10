import { useState } from "react";
import { MouseEventType } from "../types";
import QuestionAnswerItem from "./QuestionAnswerItem";

type Props = {
  questionObj: {
    question: string;
    correct_answer: string;
    allAnswers: string[];
  };
  checkTokenAnswers: boolean;
  setAnswer: (question: string, e: React.MouseEvent<Element, MouseEvent>) => void;
};

export default function Question({ setAnswer, checkTokenAnswers, questionObj }: Props) {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (i: number) => {
    setClickedId(i);
  };

  return (
    <>
      <h3>{questionObj.question}</h3>
      <ul className="question-ul">
        {questionObj.allAnswers.map((answer, index) => {
          return (
            <QuestionAnswerItem
              key={answer}
              answer={answer}
              clickHandler={(e: MouseEventType) => {
                handleClick(index);
                setAnswer(questionObj.question, e);
              }}
              checkTokenAnswers={checkTokenAnswers}
              selected={index === clickedId}
              answerIsCorrect={questionObj.correct_answer === answer}
            />
          );
        })}
      </ul>
    </>
  );
}
