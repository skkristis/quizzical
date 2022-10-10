import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <h1 className="start-h1">Quizzical</h1>
      <Link className="start-quiz-btn" to="/QuizMain">
        Start!
      </Link>
    </div>
  );
}
