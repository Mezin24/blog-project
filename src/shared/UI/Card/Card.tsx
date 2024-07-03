import { FC, HTMLAttributes, ReactNode, memo } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div {...otherProps} className={classnames(cls.card, {}, [className])}>
      {children}
    </div>
  );
});
