import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
/*
 *Component is deprecated. Find new in redisigned folder
 *@deprecated
 */
export const Portal: FC<PortalProps> = (props) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
