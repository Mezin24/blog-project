import { FC, memo } from 'react';
import { Code } from 'shared/UI/Code/Code';
import { classnames } from 'shared/lib/classnames/classnames';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
  memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classnames(cls.articleCodeBlockComponent, {}, [className])}
      >
        <Code text={block.code} />
      </div>
    );
  });
