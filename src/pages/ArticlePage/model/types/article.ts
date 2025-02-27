import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/Article';
import type { ArticleSortFeald, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlePageScheme extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    view: ArticleView;
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    order: SortOrder;
    sort: ArticleSortFeald;
    search: string;
    type: ArticleType;

    _inited?: boolean;
}
