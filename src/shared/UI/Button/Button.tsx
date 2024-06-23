import { ButtonHTMLAttributes, memo } from 'react';
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
  disabled?: boolean;
}

export const Button = memo(
  ({
    className,
    children,
    theme,
    size = ButtonSize.M,
    square = false,
    disabled,
    ...otherProps
  }: ButtonProps) => {
    const mods: Mods = {
      [cls[theme]]: true,
      [cls.square]: square,
      [cls.disabled]: disabled,
    };

    return (
      <button
        type='button'
        className={classnames(cls.Button, mods, [
          className,
          cls[theme],
          cls[size],
        ])}
        disabled={disabled}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
);
