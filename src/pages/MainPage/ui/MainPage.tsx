import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';
import { ToggleFeatures } from '@/shared/lib/featureFlags';

// import cls from './MainPage.module.scss';

// eslint-disable-next-line i18next/no-literal-string
const CounterRedisign = () => <div>Counter will be available soon</div>;

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('main');

    return (
        <Page className="" data-testid="MainPage">
            {t('Главная')}
            <ToggleFeatures feature="isCounterEnabled" off={<CounterRedisign />} on={<Counter />} />
        </Page>
    );
};

export default MainPage;
