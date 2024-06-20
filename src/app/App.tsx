import { useTheme } from 'app/providers/ThemeProvider';
import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { classnames } from 'shared/lib/classnames/classnames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/AppRouter';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
