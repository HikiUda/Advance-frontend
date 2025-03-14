import { FC } from 'react';

import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { EditableProfileCard } from '@/features/EditableProfileCard';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames('', {}, [className])} data-testid="ProfilePage">
            <VStack gap="16" max>
                {id && <EditableProfileCard id={id} />}
            </VStack>
        </Page>
    );
};
export default ProfilePage;
