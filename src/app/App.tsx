import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, initUserData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppRouter } from './providers/router';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/featureFlags';
import { MainLayout } from '@/shared/layout/MainLayout';

export const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(initUserData());
    }, [dispatch]);

    if (!inited) {
        return <PageLoader />;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames('app_redesigned', {}, [])}>
                    <Suspense fallback="Loading...">
                        <MainLayout
                            sidebar={<Sidebar />}
                            content={inited && <AppRouter />}
                            header={<Navbar />}
                            toolbar={<div>adsfaaf</div>}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div className={classNames('app', {}, [])}>
                    <Suspense fallback="Loading...">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
};
