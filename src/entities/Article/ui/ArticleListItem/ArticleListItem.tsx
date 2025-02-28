import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icon/eye.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getRouteArtilceDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import cls from './ArticleListItem.module.scss';
import {
    Article,
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const { className, article, view = ArticleView.SMALL, target } = props;
    const { t } = useTranslation('articles');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.view} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />

                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.data} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    {types}

                    <AppImage
                        fallback={<Skeleton width="100%" height="250px" />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArtilceDetails(article.id)} target={target}>
                            <Button theme={ThemeButton.OUTLINE}>{t('Читать далее...')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <Link
            target={target}
            to={getRouteArtilceDetails(article.id)}
            className={classNames('', {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width="200px" height="200px" />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </Link>
    );
};
