import { MutableRefObject, ReactNode, memo, useRef } from 'react';
import { classnames } from 'shared/lib/classnames/classnames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const rootRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    rootRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section ref={rootRef} className={classnames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
