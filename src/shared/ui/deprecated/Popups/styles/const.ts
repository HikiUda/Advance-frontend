import { DropDownDirection } from '../../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom right': cls.bottomRight,
    'bottom left': cls.bottomLeft,
    'top right': cls.topRight,
    'top left': cls.topLeft,
};
