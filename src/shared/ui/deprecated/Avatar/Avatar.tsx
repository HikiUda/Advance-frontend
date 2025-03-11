import { CSSProperties, FC, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import { Skeleton } from '../Skeleton';
import DefaultAvatar from '@/shared/assets/icon/defaultAvatar.svg';
import { Icon } from '../Icon';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    fallbackInverted?: boolean;
}
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const Avatar: FC<AvatarProps> = (props) => {
    const { className, fallbackInverted, src, size = 100 } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );
    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon inverted={fallbackInverted} Svg={DefaultAvatar} />;
    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            src={src}
            alt=""
        />
    );
};
