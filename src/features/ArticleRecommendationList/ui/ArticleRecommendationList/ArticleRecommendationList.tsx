import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useArticleRecommendationList } from '../../api/recommendationsApi/recommendationsApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isLoading, data: articles } = useArticleRecommendationList(3);
    if (isLoading || !articles) {
        return null;
    }
    return (
        <VStack className={className}>
            <Text title={t('Рекомендуем')} />
            <ArticleList
                articles={articles}
                target="_blank"
                virtualized
            />
        </VStack>
    );
});
