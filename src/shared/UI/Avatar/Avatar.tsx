import { CSSProperties, useMemo } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src: string;
  size?: number;
  alt?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { src, alt, size = 100, className } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return (
    <img
      style={styles}
      src={src}
      alt={alt}
      className={classnames(cls.Avatar, {}, [className])}
    />
  );
};
