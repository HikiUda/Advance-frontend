import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const Icon: FC<IconProps> = (props) => {
    const { className, Svg, inverted, ...otherProps } = props;

    return (
        <div className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])}>
            <Svg {...otherProps} />
        </div>
    );
};
