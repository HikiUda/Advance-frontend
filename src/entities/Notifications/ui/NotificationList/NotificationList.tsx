import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import cls from './NotificationList.module.scss';
import { useNotificationList } from '../../api/notificationsApi';

interface NotificationListProps {
    className?: string;
}

export const NotificationList: FC<NotificationListProps> = (props) => {
    const { className } = props;
    const { isLoading, data: notifications } = useNotificationList(null, { pollingInterval: 5000 });

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
                <Skeleton width="100%" height="80px" border="8px" />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(cls.NotificationList, {}, [className])}>
            {notifications?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
};
