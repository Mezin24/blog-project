import { FC, memo } from 'react';
import { Card } from 'shared/UI/Card/Card';
import { Skeleton } from 'shared/UI/Skeleton/Skeleton';
import { classnames } from 'shared/lib/classnames/classnames';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view = ArticleView.BIG } = props;

    if (view === ArticleView.BIG) {
      return (
        <div className={classnames('', {}, [className, cls[view]])}>
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton height={30} width={30} border='50%' />
              <Skeleton height={16} width={150} className={cls.username} />
              <Skeleton height={16} width={150} className={cls.date} />
            </div>
            <Skeleton height={24} width={250} className={cls.title} />
            <Skeleton height={200} className={cls.img} />
            <div className={cls.footer}>
              <Skeleton height={36} width={200} className={cls.title} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div className={classnames('', {}, [className, cls[view]])}>
        <Card>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} className={cls.infoWrapper} />
          </div>
          <Skeleton width={150} height={16} className={cls.infoWrapper} />
        </Card>
      </div>
    );
  }
);
