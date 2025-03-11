import { FC, useEffect, useState } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';

interface BugButtonProps {
    className?: string;
}

export const BugButton: FC<BugButtonProps> = (props) => {
    const { className } = props;

    const [error, setError] = useState(false);

    const throwError = () => {
        setError(!error);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    });

    // eslint-disable-next-line i18next/no-literal-string
    return <Button onClick={throwError}>Throw Error</Button>;
};
