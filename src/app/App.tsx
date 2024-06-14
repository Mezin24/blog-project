import { Suspense } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classnames } from 'shared/lib/classnames/classnames';
import { Modal } from 'shared/UI/Modal/Modal';
import { AppRouter } from './providers/AppRouter';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classnames(
        'app',
        { selected: true, red: false, hover: true },
        [theme]
      )}
    >
      <Suspense fallback=''>
        <Navbar />
        <Modal />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
