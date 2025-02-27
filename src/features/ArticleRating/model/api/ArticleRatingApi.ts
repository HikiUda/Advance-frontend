import { ArticleRatingType } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface getArticleRetingArg {
    userId: string;
    articleId: string;
}
interface rateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const ArticleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<ArticleRatingType[], getArticleRetingArg>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, rateArticleArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetArticleRating = ArticleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = ArticleRatingApi.useRateArticleMutation;
