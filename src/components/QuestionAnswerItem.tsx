import { MouseEventType } from "../types";
import decodeHtml from "../utils/decodeHtml";

type Props = {
  answer: string;
  clickHandler: (e: MouseEventType) => void;
  checkTokenAnswers: boolean;
  selected: boolean;
  answerIsCorrect: boolean;
};

export default function QuestionAnswerItem({
  answer,
  clickHandler,
  checkTokenAnswers,
  selected,
  answerIsCorrect,
}: Props) {
  return (
    <li
      onClick={clickHandler}
      className={
        !checkTokenAnswers
          ? selected
            ? "question-li-selected "
            : "question-li"
          : answerIsCorrect
          ? "question-li-selected right-answer"
          : selected
          ? "question-li-selected wrong-answer"
          : "question-li"
      }
    >
      {decodeHtml(answer)}
    </li>
  );
}
