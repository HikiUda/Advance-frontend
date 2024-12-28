import { FC } from 'react';

// import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;
    return <div className="">main</div>;
};

export default MainPage;
