import { ChangeEvent, useMemo } from 'react';
import { Mods, classnames } from 'shared/lib/classnames/classnames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  onChange?: (value: T) => void;
  value?: T;
  options?: SelectOptions<T>[];
  readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { options, className, label, onChange, value, readonly } = props;

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  const selectOptions = useMemo(
    () =>
      options?.map((opt) => (
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
};
