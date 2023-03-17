import { MainProvider } from '@app/providers';
import { CssBaseline } from '@mui/material';
import { Pages } from '@pages';
import { BrowserRouter } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <MainProvider>
        <CssBaseline />
        <main>
          <Pages />
        </main>
      </MainProvider>
    </BrowserRouter>
  );
};
