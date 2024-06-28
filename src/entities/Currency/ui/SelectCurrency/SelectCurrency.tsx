import { useTranslation } from 'react-i18next';
import { Select } from 'shared/UI/Select/Select';
import { classnames } from 'shared/lib/classnames/classnames';
import { Currency } from '../../model/types/currency';

interface SelectCurrencyProps {
  className?: string;
  onChange?: (value: Currency) => void;
  value?: Currency;
  readonly?: boolean;
}

const options = [
  { content: Currency.RUB, value: Currency.RUB },
  { content: Currency.EUR, value: Currency.EUR },
  { content: Currency.US, value: Currency.US },
];

export const SelectCurrency = ({
  className,
  onChange,
  value,
  readonly,
}: SelectCurrencyProps) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => onChange?.(value as Currency);

  return (
    <Select
      className={classnames('', {}, [className])}
      label={t('Укажите валюту')}
      options={options}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
    />
  );
};
