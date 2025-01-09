import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Button } from '../Button/Button';

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
            className={classNames('', {}, [className])}
        >
            {i18n.language?.toUpperCase() || 'RU'}
        </Button>
    );
};
