import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

// import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('main');
    return <Page className="">{t('Главная')}</Page>;
};

export default MainPage;
