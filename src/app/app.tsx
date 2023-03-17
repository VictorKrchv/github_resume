import { Pages } from "@pages";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};
