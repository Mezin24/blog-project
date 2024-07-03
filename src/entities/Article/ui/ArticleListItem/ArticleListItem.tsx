import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Avatar } from 'shared/UI/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Card } from 'shared/UI/Card/Card';
import { Icon } from 'shared/UI/Icon/Icon';
import { Text } from 'shared/UI/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { classnames } from 'shared/lib/classnames/classnames';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view?: ArticleView;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
  (props: ArticleListItemProps) => {
    const { className, article, view = ArticleView.BIG } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
      navigate(RoutePath.articlesDetails + article.id);
    }, [article.id, navigate]);

    const types = (
      <Text text={article?.type?.join(', ')} className={cls.types} />
    );
    const views = <Text text={String(article?.views)} className={cls.views} />;

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks?.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;
      return (
        <div className={classnames('', {}, [className, cls[view]])}>
          <Card className={cls.card}>
            <div className={cls.header}>
              <Avatar size={30} src={article?.user?.avatar || ''} />
              <Text text={article?.user?.username} className={cls.username} />
              <Text text={article.createdAt} className={cls.date} />
            </div>
            <Text title={article.title} className={cls.title} />
            {types}
            <img src={article.img} alt={article.title} className={cls.img} />
            {textBlock && (
              <ArticleTextBlockComponent
                block={textBlock}
                className={cls.textBlock}
              />
            )}
            <div className={cls.footer}>
              <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
                {t('Читать далее...')}
              </Button>
              {views}
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div className={classnames('', {}, [className, cls[view]])}>
        <Card onClick={onOpenArticle}>
          <div className={cls.imageWrapper}>
            <img src={article?.img} alt={article?.title} className={cls.img} />
            <Text text={article?.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
            <Icon Svg={EyeIcon} />
          </div>
          <Text text={article?.title} className={cls.title} />
        </Card>
      </div>
    );
  }
);
