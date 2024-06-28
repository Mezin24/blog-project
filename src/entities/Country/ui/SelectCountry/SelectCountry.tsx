import { useTranslation } from 'react-i18next';
import { Select } from 'shared/UI/Select/Select';
import { classnames } from 'shared/lib/classnames/classnames';
import { Country } from '../../model/types/country';

interface SelectCountryProps {
  className?: string;
  onChange?: (value: Country) => void;
  value?: Country;
  readonly?: boolean;
}

const options = [
  { content: Country.RUSSIA, value: Country.RUSSIA },
  { content: Country.ARMENIA, value: Country.ARMENIA },
  { content: Country.BELARUS, value: Country.BELARUS },
  { content: Country.KASAKHSTAN, value: Country.KASAKHSTAN },
  { content: Country.UKRAINE, value: Country.UKRAINE },
];

export const SelectCountry = ({
  className,
  onChange,
  value,
  readonly,
}: SelectCountryProps) => {
  const { t } = useTranslation();

  const onChangeHandler = (value: string) => onChange?.(value as Country);

  return (
    <Select
      className={classnames('', {}, [className])}
      label={t('Укажите страну')}
      options={options}
      onChange={onChangeHandler}
      value={value}
      readonly={readonly}
    />
  );
};
