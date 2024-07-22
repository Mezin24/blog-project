import { ArticleSortField } from 'entities/Article/model/types/article';
import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/UI/Select/Select';
import { classnames } from 'shared/lib/classnames/classnames';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sortField: ArticleSortField;
  orderField: SortOrder;
  onChangeSort: (sort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
  (props: ArticleSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, orderField, sortField } =
      props;
    const { t } = useTranslation('articles');

    const sortFiledOptions = useMemo<SelectOptions<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('дате'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('названию'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('просмотрам'),
        },
      ],
      [t]
    );

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: t('возрастанию'),
        },
        {
          value: 'desc',
          content: t('убыванию'),
        },
      ],
      [t]
    );

    return (
      <div className={classnames(cls.ArticleSortSelector, {}, [className])}>
        <Select<ArticleSortField>
          label={t('Сортировать по')}
          options={sortFiledOptions}
          value={sortField}
          onChange={onChangeSort}
        />
        <Select<SortOrder>
          label={t('По')}
          options={orderOptions}
          value={orderField}
          onChange={onChangeOrder}
        />
      </div>
    );
  }
);
