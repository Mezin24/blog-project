import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Portal } from 'shared/UI/Portal/Portal';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Modal.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const { theme } = useTheme();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Record<string, string | boolean> = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onClickHandler = useCallback((e: MouseEvent) => {
    e.stopPropagation();
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCloseHandler();
      }
    },
    [onCloseHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classnames(cls.Modal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={onCloseHandler}>
          <div className={cls.content} onClick={onClickHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
