import { classnames } from 'shared/lib/classnames/classnames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = ({ className, Svg }: IconProps) => (
  <Svg className={classnames(cls.Icon, {}, [className])} />
);
