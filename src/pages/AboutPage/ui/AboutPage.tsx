import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

// import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('about');
    return <Page className="">{t('О нас')}</Page>;
};

export default AboutPage;
