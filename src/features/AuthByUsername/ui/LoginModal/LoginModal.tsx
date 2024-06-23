import { Suspense } from 'react';
import { Loader } from 'shared/UI/Loader/Loader';
import { Modal } from 'shared/UI/Modal/Modal';
import { classnames } from 'shared/lib/classnames/classnames';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose, className } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classnames('', {}, [className])}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
