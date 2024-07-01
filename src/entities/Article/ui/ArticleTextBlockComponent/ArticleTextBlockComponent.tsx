import { FC, memo } from 'react';
import { Text } from 'shared/UI/Text/Text';
import { classnames } from 'shared/lib/classnames/classnames';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
  memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div className={classnames('', {}, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text className={cls.paragraph} text={paragraph} key={paragraph} />
        ))}
      </div>
    );
  });
