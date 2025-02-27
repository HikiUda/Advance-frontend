import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}
export type TextAlign = 'right' | 'left' | 'center';
export type TextSize = 'size_s' | 'size_m' | 'size_l';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    size_l: 'h1',
    size_m: 'h2',
    size_s: 'h3',
};

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        size = 'size_m',
        align = 'left',
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames('', {}, [className, cls[theme], cls[align], cls[size]])}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={cls.text}
                >
                    {text}
                </p>
            )}
        </div>
    );
};
