import { Modal } from 'shared/UI/Modal/Modal';
import { classnames } from 'shared/lib/classnames/classnames';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

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
      className={classnames(cls.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
};
