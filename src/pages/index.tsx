import { Route, Routes } from "react-router-dom";
import { paths } from "./paths";
import { HomePage } from "./home";
import { ResumePage } from "./resume";

export const Pages = () => {
  return (
    <Routes>
      <Route path={paths.home()} element={<HomePage />} />
      <Route path={paths.resume(":username")} element={<ResumePage />} />
    </Routes>
  );
};
