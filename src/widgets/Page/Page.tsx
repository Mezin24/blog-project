import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollSaveByPath, scrollSaveActions } from 'features/ScrollSasve';
import {
  MutableRefObject,
  ReactNode,
  UIEvent,
  memo,
  useCallback,
  useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classnames } from 'shared/lib/classnames/classnames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
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
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollTop = useSelector((state: StateSchema) =>
    getScrollSaveByPath(state, pathname)
  );

  useInfiniteScroll({
    rootRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    rootRef.current.scrollTop = scrollTop;
  });

  const onScrollHandler = useThrottle(
    useCallback(
      (e: UIEvent<HTMLDivElement>) => {
        console.log('scroll');
        dispatch(
          scrollSaveActions.setScrollSave({
            path: pathname,
            position: e.currentTarget.scrollTop,
          })
        );
      },
      [dispatch, pathname]
    ),

    500
  );

  return (
    <section
      onScroll={onScrollHandler}
      ref={rootRef}
      className={classnames(cls.Page, {}, [className])}
    >
      {children}
      {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
    </section>
  );
});
