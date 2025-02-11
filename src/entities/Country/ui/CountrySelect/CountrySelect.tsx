import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();
    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );
    return (
        <ListBox
            label={t('Укажите страну')}
            value={value}
            onChange={onChangeHandler}
            items={options}
            readonly={readonly}
            defaultValue={t('Ваша страна')}
            direction="top right"
        />
    );
});
