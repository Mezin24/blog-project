import { AppLink } from 'shared/UI/AppLink/AppLink';
import { Avatar } from 'shared/UI/Avatar/Avatar';
import { Skeleton } from 'shared/UI/Skeleton/Skeleton';
import { Text } from 'shared/UI/Text/Text';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classnames } from 'shared/lib/classnames/classnames';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div
        className={classnames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton height={30} width={30} border='50%' />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton height={50} width='100%' className={cls.text} />
      </div>
    );
  }

  if (!comment) return null;

  return (
    <div className={classnames(cls.CommentCard, {}, [className])}>
      <AppLink
        to={`${RoutePath.profile}${comment?.user.id}`}
        className={cls.header}
      >
        {comment?.user.avatar && (
          <Avatar size={30} src={comment?.user.avatar} />
        )}
        <Text text={comment?.user.username} />
      </AppLink>
      <Text text={comment?.text} className={cls.text} />
    </div>
  );
};
