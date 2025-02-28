import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
// eslint-disable-next-line fsd-layer-import/layer-import
import { getScrollSaveByPath, scrollSaveActions } from '@/widgets/ScrollSave';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useTrottle } from '@/shared/lib/hooks/useTrottle/useTrottle';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/test';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollSaveByPath(state, location.pathname),
    );

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });
    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useTrottle((e: UIEvent) => {
        console.log('scroll');
        dispatch(
            scrollSaveActions.setScrollPosition({
                postion: e.currentTarget.scrollTop,
                path: location.pathname,
            }),
        );
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
            // eslint-disable-next-line react/destructuring-assignment
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>
    );
};
