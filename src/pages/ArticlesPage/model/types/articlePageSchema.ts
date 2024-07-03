import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  view: ArticleView;
  error?: string;

  page: number;
  limit?: number;
  hasMore: boolean;
}
