import { Modal } from 'shared/UI/Modal/Modal';
import { classnames } from 'shared/lib/classnames/classnames';
import { LoginForm } from '../LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
};
