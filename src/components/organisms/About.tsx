import React from 'react';
import Header from "../molecules/Header";
import { IPathNameProps } from "../../utils/interfaces";

const About: React.FC<IPathNameProps> = ({pathname}) => {
    return (
        <div>
            <Header title={pathname} />
        </div>
    );
};

export default About;
