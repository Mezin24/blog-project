import { useEffect, useState } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
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
