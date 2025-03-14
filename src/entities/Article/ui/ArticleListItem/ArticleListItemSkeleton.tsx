import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Card } from '@/shared/ui/deprecated/Card';

import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;

    view?: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
    const { className, view = ArticleView.SMALL } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Skeleton height={30} width={30} border="50%" />

                        <Skeleton width={150} height={16} className={cls.username} />
                        <Skeleton width={150} height={16} className={cls.data} />
                    </div>
                    <Skeleton width={250} height={24} className={cls.title} />

                    <Skeleton height={200} className={cls.img} />

                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.img} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} />
                </div>
                <Skeleton width={150} height={16} className={cls.title} />
            </Card>
        </div>
    );
};
