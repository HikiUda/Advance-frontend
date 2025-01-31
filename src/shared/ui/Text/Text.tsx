import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export type TextAlign = 'right' | 'left' | 'center';
export type TextSize = 'size_m' | 'size_l';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text: FC<TextProps> = (props) => {
    const { className, title, text, theme = TextTheme.PRIMARY, size = 'size_m', align = 'left' } = props;
    return (
        <div className={classNames('', {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
