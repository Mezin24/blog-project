import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'shared/config/i18next/i18next';
import App from './app/App';
import 'app/styles/index.scss';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
