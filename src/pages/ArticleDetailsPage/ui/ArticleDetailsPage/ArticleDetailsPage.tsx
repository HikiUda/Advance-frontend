import { FC, memo } from 'react';

import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { Text } from '@/shared/ui/deprecated/Text';

import { DynamicModuelLoader, ReducersList } from '@/shared/lib/components/DynamicModuelLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { getFeatureFlags } from '@/shared/lib/featureFlags';

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
    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');

    return (
        <DynamicModuelLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailssPage, {}, [className])}>
                <VStack max gap="16">
                    <ArticleDetailsPageHeader />
                    {id ? <ArticleDetails id={id} /> : <Text text={t('Статья не найдена')} />}
                    {isArticleRatingEnabled && id ? <ArticleRating articleId={id} /> : null}
                    <ArticleRecommendationList />
                    {id && <ArticleDetailsComments id={id} />}
                </VStack>
            </Page>
        </DynamicModuelLoader>
    );
};
export default memo(ArticleDetailsPage);
