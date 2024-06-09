import { Link } from 'react-router-dom';

import { classnames } from 'shared/lib/classnames/classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/AppRouter';

import './styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classnames(
        'app',
        { selected: true, red: false, hover: true },
        [theme]
      )}
    >
      <button onClick={toggleTheme}>Toggle</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>
      <AppRouter />
    </div>
  );
};
export default App;
