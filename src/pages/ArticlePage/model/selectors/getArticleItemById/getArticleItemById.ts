import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [getArticleItemById] = buildSelector(
    (state: StateSchema, id: string) => state.articlePage?.entities[id],
);
