import { classnames } from 'shared/lib/classnames/classnames';
import { Loader } from 'shared/UI/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}
export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={classnames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
