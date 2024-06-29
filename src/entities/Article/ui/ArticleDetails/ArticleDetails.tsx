import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/UI/Skeleton/Skeleton';
import { Text, TextAlign } from 'shared/UI/Text/Text';
import { classnames } from 'shared/lib/classnames/classnames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getArticlesData,
  getArticlesError,
  getArticlesIsLoading,
} from '../../model/selectors/getArticleData';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  const { className, id } = props;
  const { t } = useTranslation('articles');
  const article = useSelector(getArticlesData);
  const isLoading = true;
  // const isLoading = useSelector(getArticlesIsLoading);
  const error = useSelector(getArticlesError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          width={200}
          height={200}
          border='50%'
          className={cls.avatar}
        />
        <Skeleton width={300} height={32} className={cls.title} />
        <Skeleton width={600} height={24} className={cls.skeleton} />
        <Skeleton width='100%' height={200} className={cls.skeleton} />
        <Skeleton width='100%' height={200} className={cls.skeleton} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        text={t('Произошла ошибка при закгрузке статьи')}
      />
    );
  } else {
    content = <div>ArticleDetails</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classnames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
};
