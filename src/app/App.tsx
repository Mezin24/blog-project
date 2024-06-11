import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/AppRouter';
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
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
