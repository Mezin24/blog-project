import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}
export const Button = ({
  className,
  children,
  theme,
  ...otherProps
}: ButtonProps) => (
  <button
    type='button'
    className={classNames(cls.Button, {}, [className, cls[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);
