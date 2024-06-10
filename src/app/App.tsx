import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/AppRouter';
import { Navabar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(
        'app',
        { selected: true, red: false, hover: true },
        [theme]
      )}
    >
      <Suspense fallback=''>
        <Navabar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
