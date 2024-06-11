import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/UI/Button/Button';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwError}>{t('throw error')}</Button>;
};
