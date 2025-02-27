import { FC, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icon/copy.svg';
import cls from './Code.module.scss';
import { Icon } from '../Icon/Icon';
import { Button, ThemeButton } from '../Button/Button';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code: FC<CodeProps> = (props) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.codeBtn}
                theme={ThemeButton.CLEAR}
            >
                <Icon Svg={CopyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
};
