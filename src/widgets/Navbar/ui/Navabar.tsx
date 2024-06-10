import { AppLink } from 'shared/UI/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <nav className={cls.links}>
      <AppLink to='/'>Главная</AppLink>
      <AppLink to='/about'>О нас</AppLink>
    </nav>
  </div>
);
