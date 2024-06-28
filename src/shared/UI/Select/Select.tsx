import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { Mods, classnames } from 'shared/lib/classnames/classnames';
import cls from './Select.module.scss';

interface SelectOptions {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
  options: SelectOptions[];
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { options, className, label, onChange, value, readonly } = props;

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  const selectOptions = useMemo(
    () =>
      options.map((opt) => (
        <option key={opt.value} value={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
    [options]
  );

  return (
    <div className={classnames(cls.selectWrapper, mods, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {selectOptions}
      </select>
    </div>
  );
});
