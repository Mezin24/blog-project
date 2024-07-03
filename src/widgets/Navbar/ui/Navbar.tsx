import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsAuthOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classnames(cls.Navbar, {}, [className])}>
        <Button
          onClick={onLogout}
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.link}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classnames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onOpenModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.link}
      >
        {t('Войти')}
      </Button>
      {isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />}
    </header>
  );
});
