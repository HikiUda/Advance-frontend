import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getCanEdit } from '../../model/selectors/getCanEdit/getCanEdit';
import { profileActions } from '../../model/slices/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const canEdit = useSelector(getCanEdit);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCanceled = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onConfirmEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                <HStack>
                    {readonly ? (
                        <Button data-testid="EditableProfileCardHeader.EditButton" onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                data-testid="EditableProfileCardHeader.CancelButton"
                                onClick={onCanceled}
                                theme={ThemeButton.OUTLINE_RED}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                data-testid="EditableProfileCardHeader.SaveButton"
                                onClick={onConfirmEdit}
                            >
                                {t('Подтвердить')}
                            </Button>
                        </>
                    )}
                </HStack>
            )}
        </HStack>
    );
};
