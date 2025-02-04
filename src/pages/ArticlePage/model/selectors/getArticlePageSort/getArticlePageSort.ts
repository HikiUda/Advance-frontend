import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortFeald } from 'entities/Article/model/types/article';

export const getArticlePageSort = (state: StateSchema) => state.articlePage?.sort || ArticleSortFeald.CREATED;
