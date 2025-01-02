import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './LanguageSwitcher.module.scss';
import { Button } from '../Button/Button';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
    const { className } = props;
    const { i18n } = useTranslation();

    const toggleLan = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggleLan}
            className={classNames(cls.LanguageSwitcher, {}, [className])}
        >
            {i18n.language}
        </Button>
    );
};
