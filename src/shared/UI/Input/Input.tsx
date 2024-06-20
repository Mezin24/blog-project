import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    placeholder,
    autoFocus,
    type,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>();

  const onChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [onChange]
  );

  useEffect(() => {
    if (autoFocus) {
      inputRef?.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classnames(cls.inputWrapper, {}, [className])}>
      {placeholder && <div>{`${placeholder}`}</div>}
      <input
        type={type}
        className={cls.input}
        value={value}
        onChange={onChangeValue}
        ref={inputRef}
        {...otherProps}
      />
    </div>
  );
});
