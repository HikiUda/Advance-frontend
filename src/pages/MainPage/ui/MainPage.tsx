import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

// import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('main');

    return (
        <Page className="" data-testid="MainPage">
            {t('Главная')}
            123456
            <Counter />
        </Page>
    );
};

export default MainPage;
