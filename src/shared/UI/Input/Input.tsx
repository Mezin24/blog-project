import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { Mods, classnames } from 'shared/lib/classnames/classnames';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    placeholder,
    autoFocus,
    type,
    readonly,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus();
    }
  }, [autoFocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classnames(cls.inputWrapper, mods, [className])}>
      {placeholder && <div>{`${placeholder}`}</div>}
      <input
        type={type}
        className={cls.input}
        value={value}
        onChange={onChangeValue}
        ref={inputRef}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
