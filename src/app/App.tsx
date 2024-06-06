import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { classnames } from 'shared/lib/classnames/classnames';
import { useTheme } from 'app/providers/ThemeProvider';

import './styles/index.scss';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

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
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
