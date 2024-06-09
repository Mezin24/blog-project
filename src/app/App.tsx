import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/AppRouter';

import { Navabar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames(
        'app',
        { selected: true, red: false, hover: true },
        [theme]
      )}
    >
      <Navabar />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};
export default App;
