import { FC, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuelLoader, ReducersList } from 'shared/lib/components/DynamicModuelLoader';
import { HStack } from 'shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentFormText/getAddCommentFormText';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormError } from '../../model/selectors/getAddCommentFormError/getAddCommentFormError';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onChageCommentText = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onChageCommentText('');
    }, [onChageCommentText, onSendComment, text]);

    return (
        <DynamicModuelLoader reducers={reducers}>
            <HStack
                justify="between"
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    onChange={onChageCommentText}
                    placeholder={t('Добавить комментарий')}
                />
                <Button onClick={onSendHandler}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModuelLoader>
    );
};

export default AddCommentForm;
