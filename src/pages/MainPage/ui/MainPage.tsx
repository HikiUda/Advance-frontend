import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('main');
    return <div className="">{t('Главная')}</div>;
};

export default MainPage;
