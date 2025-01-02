import { FC } from 'react';
import { useTranslation } from 'react-i18next';

//import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('about');
    return <div className="">{t('О нас')}</div>;
};

export default AboutPage;
