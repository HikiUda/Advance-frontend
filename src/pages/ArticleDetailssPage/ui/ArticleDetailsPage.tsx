import { FC, memo, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';

import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { DynamicModuelLoader, ReducersList } from 'shared/lib/components/DynamicModuelLoader';
import { useSelector } from 'react-redux';
import { getArticleDetailsIsLoading } from 'entities/Article/model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import cls from './ArticleDetailsPage.module.scss';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../model/slices/articleDetailsCommentsSlice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailssPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailssPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );
    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    return (
        <DynamicModuelLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <Page className={classNames(cls.ArticleDetailssPage, {}, [className])}>
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onBackToList}
                >
                    {t('Назад к списку')}
                </Button>
                {id ? <ArticleDetails id={id} /> : <Text text={t('Статья не найдена')} />}
                <Text
                    className={cls.commentTitle}
                    title={t('Комментарии')}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuelLoader>
    );
};
export default memo(ArticleDetailsPage);
