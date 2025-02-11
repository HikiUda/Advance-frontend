import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { VStack } from 'shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton
                        width={30}
                        height={30}
                        border="50%"
                    />
                    <Skeleton
                        width={100}
                        height={16}
                    />
                </div>
                <Skeleton
                    className={cls.text}
                    width="100%"
                    height={50}
                />
            </div>
        );
    }
    if (!comment) {
        return null;
    }

    return (
        <VStack
            max
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink
                to={`${RoutePath.profile}${comment?.user.id}`}
                className={cls.header}
            >
                {comment?.user?.avatar ? (
                    <Avatar
                        src={comment.user.avatar}
                        size={30}
                    />
                ) : null}
                <Text title={comment?.user?.username} />
            </AppLink>
            <Text
                className={cls.text}
                title={comment?.text}
            />
        </VStack>
    );
};
