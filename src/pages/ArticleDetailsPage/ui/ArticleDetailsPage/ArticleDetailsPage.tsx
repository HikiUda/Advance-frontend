import { FC, memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { DynamicModuelLoader, ReducersList } from 'shared/lib/components/DynamicModuelLoader';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleRecommendations } from '../../model/slices/articleDetailsRecommendationsSlice';
import { getArticleDetailsRecommendationsIsLoading } from '../../model/selectors/getArticleDetailsRecommendationsIsLoading/getArticleDetailsRecommendationsIsLoading';
import { fetchArticleRecommendatoins } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailssPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailssPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{ id: string }>();

    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleDetailsRecommendationsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendatoins());
    });

    return (
        <DynamicModuelLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <Page className={classNames(cls.ArticleDetailssPage, {}, [className])}>
                <VStack
                    max
                    gap="16"
                >
                    <ArticleDetailsPageHeader />
                    {id ? <ArticleDetails id={id} /> : <Text text={t('Статья не найдена')} />}
                    <Text
                        className={cls.commentTitle}
                        title={t('Рекомендуем')}
                    />
                    <ArticleList
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        className={cls.recommendations}
                        target="_blank"
                    />
                    <Text title={t('Комментарии')} />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        isLoading={commentsIsLoading}
                        comments={comments}
                    />
                </VStack>
            </Page>
        </DynamicModuelLoader>
    );
};
export default memo(ArticleDetailsPage);
