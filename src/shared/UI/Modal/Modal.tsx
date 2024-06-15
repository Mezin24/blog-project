import { ReactNode, useCallback, MouseEvent } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
export const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose } = props;

  const mods: Record<string, string | boolean> = {
    [cls.opened]: isOpen,
  };

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onClickHandler = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div className={classnames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={onCloseHandler}>
        <div className={cls.content} onClick={onClickHandler}>
          {children}
        </div>
      </div>
    </div>
  );
};
