import { useEffect, useMemo, useState } from "react";
import { AnswersObj, FetchQuestionObj, QuestionObj } from "../types";
import decodeHtml from "../utils/decodeHtml";
import shuffle from "../utils/shuffle";
import CheckAnswersButton from "./CheckAnswersButton";
import Questions from "./Questions";

export default function QuizMain() {
  const [questionsData, setQuestionsData] = useState<QuestionObj[]>([]);
  const [checkToken, setCheckToken] = useState<boolean>(false);
  const [answers, setAnswers] = useState<AnswersObj[]>([]);

  // Because API is public, not hiding the url
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((r) => r.json())
      .then((r) => {
        setQuestionsData(
          r.results.map((question: FetchQuestionObj) => {
            return {
              question: decodeHtml(question.question),
              correct_answer: question.correct_answer,
              allAnswers: shuffle([question.correct_answer, ...question.incorrect_answers]),
            };
          })
        );
        setAnswers(
          r.results.map((question: AnswersObj) => {
            return {
              question: decodeHtml(question.question),
              selectedAnswer: "",
            };
          })
        );
      });
  }, []);

  const goodAnswerCount = useMemo(() => {
    const goodAnswerCountArr = questionsData.filter(
      (question, index) => question.correct_answer === answers[index].selectedAnswer
    );
    return goodAnswerCountArr.length;
  }, [checkToken]);

  return (
    <div className="mainQuiz">
      <Questions setAnswers={setAnswers} checkTokenAnswers={checkToken} questionsData={questionsData} />
      <CheckAnswersButton checkToken={checkToken} setcheckToken={setCheckToken} correctAnswers={goodAnswerCount} />
    </div>
  );
}
