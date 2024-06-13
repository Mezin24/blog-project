import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classnames(cls.Navbar, {}, [className])}>
    <nav className={cls.links}>/</nav>
  </div>
);
