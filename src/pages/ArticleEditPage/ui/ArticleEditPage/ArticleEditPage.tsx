import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    // eslint-disable-next-line i18next/no-literal-string
    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? `ARTICLE ${id} EDIT PAGE` : 'ARTICLE CREATE PAGE'}
        </Page>
    );
};

export default ArticleEditPage;
