import { FC, memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import CopyIcon from 'shared/assets/icons/frame.svg';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classnames(cls.Code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
