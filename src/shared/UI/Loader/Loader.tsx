import { classnames } from 'shared/lib/classnames/classnames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}
export const Loader = (props: LoaderProps) => {
  const { className } = props;
  return (
    <div className={classnames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
