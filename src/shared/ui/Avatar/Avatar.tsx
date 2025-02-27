import { CSSProperties, FC, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const { className, src, size } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );
    return (
        <img className={classNames(cls.Avatar, {}, [className])} style={styles} src={src} alt="" />
    );
};
