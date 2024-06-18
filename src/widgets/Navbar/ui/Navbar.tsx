import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation();

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  return (
    <div className={classnames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onOpenModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.link}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
    </div>
  );
};
