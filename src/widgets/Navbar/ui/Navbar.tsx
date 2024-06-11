import { AppLink } from 'shared/UI/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <nav className={cls.links}>
      <AppLink to='/'>Главная</AppLink>
      <AppLink to='/about'>О нас</AppLink>
    </nav>
  </div>
);
