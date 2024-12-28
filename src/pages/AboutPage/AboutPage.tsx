import { FC } from 'react';

//import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = (props) => {
    const { className } = props;
    return <div className="">about</div>;
};

export default AboutPage;
