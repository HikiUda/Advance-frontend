import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Button } from '../Button/Button';

interface LanguageSwitcherProps {
    className?: string;
}
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
    const { className } = props;
    const { i18n } = useTranslation();

    const toggleLan = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button onClick={toggleLan} className={classNames('', {}, [className])}>
            {i18n.language?.toUpperCase() || 'RU'}
        </Button>
    );
});
