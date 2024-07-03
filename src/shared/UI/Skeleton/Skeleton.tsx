import { CSSProperties, FC, memo } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const { className, border, height, width = '100%' } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div style={styles} className={classnames(cls.skeleton, {}, [className])} />
  );
});
