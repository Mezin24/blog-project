import { AppLink } from 'shared/UI/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavabarProps {
  className?: string;
}

export const Navabar = ({ className }: NavabarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <nav className={cls.links}>
        <AppLink to='/'>Главная</AppLink>
        <AppLink to='/about'>О нас</AppLink>
      </nav>
    </div>
  );
};
