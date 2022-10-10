import { Routes, Route } from "react-router-dom";
import { RouteItem } from "../types";
import LandingPage from "./LandingPage";
import QuizMain from "./QuizMain";

export default function RouteCentral() {
  const allRoutesArray: RouteItem[] = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/QuizMain",
      element: <QuizMain />,
    },
  ];

  return (
    <Routes>
      {allRoutesArray.map((route) => {
        return <Route key={route.path} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}
