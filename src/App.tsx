import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './pages/theme/useTheme';
import { classnames } from './helpers/classnames';
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
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
