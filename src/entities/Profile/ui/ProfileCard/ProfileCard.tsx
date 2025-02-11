import { FC } from 'react';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string | undefined;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <HStack className={classNames(cls.ProfileCard, mods, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }
    if (error) {
        return (
            <HStack className={classNames(cls.ProfileCard, mods, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={error}
                    text={error}
                    align="center"
                />
            </HStack>
        );
    }

    return (
        <VStack
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            <HStack justify="center">
                {data?.avatar && (
                    <Avatar
                        src={data?.avatar}
                        size={150}
                    />
                )}
            </HStack>
            <VStack>
                <Input
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия')}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Сколько вам лет?')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Ваш город')}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватар')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </VStack>
        </VStack>
    );
};
