import { FC } from 'react';

// import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const Loader: FC<LoaderProps> = (props) => {
    const { className } = props;
    return <div className="loader" />;
};
