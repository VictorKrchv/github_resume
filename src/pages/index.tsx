import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/home';
import { ResumePage } from '@pages/resume';
import { paths } from '@pages/paths';

export const Pages = () => {
  return (
    <Routes>
      <Route path={paths.home()} element={<HomePage />} />
      <Route path={paths.resume(':username')} element={<ResumePage />} />
    </Routes>
  );
};
