import { ReactNode } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
}
export const Modal = (props: ModalProps) => {
  const { children, className } = props;

  return (
    <div className={classnames(cls.Modal, {}, [className])}>
      <div className={cls.overlay}>
        <div className={cls.content}>{children}</div>
      </div>
    </div>
  );
};
