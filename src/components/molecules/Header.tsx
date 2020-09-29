import React from 'react';
import { IPageTitleProps } from "../../utils/interfaces";

const Header: React.FC<IPageTitleProps> = ({title, children}) => {
    return (
        <header>
            <h2 className="text-gray-700 text-center text-4xl font-semibold capitalize md:text-6xl md:text-left">{title}</h2>
            {children}
        </header>
    );
};

export default Header;
