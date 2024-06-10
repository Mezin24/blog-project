import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

  return (
    <Button onClick={toggleLang} theme={ButtonTheme.CLEAR}>
      {t('Язык')}
    </Button>
  );
};
