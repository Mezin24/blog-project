import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/AppRouter';

import { Navabar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';

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
      <Navabar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
export default App;
