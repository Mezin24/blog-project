import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Modal } from 'shared/UI/Modal/Modal';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation();

  const onToggleModal = useCallback(() => {
    setIsAuthOpen((prev) => !prev);
  }, []);

  return (
    <div className={classnames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onToggleModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.link}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthOpen} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
        similique quod in dolore iste veritatis placeat temporibus id maxime
        architecto!
      </Modal>
    </div>
  );
};
