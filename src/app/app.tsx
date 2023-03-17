import { CssBaseline } from '@mui/material';
import { Pages } from '@pages';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <main>
        <Pages />
      </main>
    </BrowserRouter>
  );
};
