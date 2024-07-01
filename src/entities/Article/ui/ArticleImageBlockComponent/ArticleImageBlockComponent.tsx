import { FC, memo } from 'react';
import { Text, TextAlign } from 'shared/UI/Text/Text';
import { classnames } from 'shared/lib/classnames/classnames';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div className={classnames('', {}, [className])}>
        <img className={cls.img} src={block.src} alt={block.title} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  });
