import { ButtonHTMLAttributes } from 'react';
import { Mods, classnames } from 'shared/lib/classnames/classnames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button = ({
  className,
  children,
  theme,
  size = ButtonSize.M,
  square = false,
  ...otherProps
}: ButtonProps) => {
  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
  };

  return (
    <button
      type='button'
      className={classnames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
