import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return <Page className={classNames('', {}, [className])}>{t('Admin Panel')}</Page>;
};

export default AdminPanelPage;
