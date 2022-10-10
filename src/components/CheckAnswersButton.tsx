import { SetStateAction } from "../types";
import refreshPage from "../utils/refreshPage";

type Props = {
  setcheckToken: SetStateAction<boolean>;
  checkToken: boolean;
  correctAnswers: number;
};

export default function checkAnswersButton({ setcheckToken, checkToken, correctAnswers }: Props) {
  return (
    <div>
      {checkToken && <h3>{`Answered ${correctAnswers}/10`}</h3>}
      {checkToken && (
        <button onClick={refreshPage} className="check-answers">
          Try again
        </button>
      )}
      {!checkToken && (
        <button onClick={() => setcheckToken(true)} className="check-answers">
          Check answers
        </button>
      )}
    </div>
  );
}
