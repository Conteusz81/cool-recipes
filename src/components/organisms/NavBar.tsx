import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import cx from "classnames";
import {routes} from "../../routes/routes";
import { FiHome, FiMenu } from 'react-icons/fi'
import { FaRegQuestionCircle, FaRegEnvelope } from 'react-icons/fa'
import NavLinkItem from "../molecules/NavLinkItem";

const NavBar = () => {

    const [isMenuHidden, setMenuVisibility] = useState<boolean>(true);

    const menuListClasses = cx('text-gray-700 text-sm mt-6 md:block', {
         'hidden': isMenuHidden,
    });

    return (
        <div className="md:col-span-1 md:flex md: justify-end">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                        <NavLink to={routes.home}>fajne przepisy</NavLink>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden" onClick={() => setMenuVisibility(prevState => !prevState)}>
                        <FiMenu size={30} />
                    </div>
                </div>
                <ul className={menuListClasses}>
                    <NavLinkItem route={routes.recipes} icon={<FiHome />} />
                    <NavLinkItem route={routes.about} icon={<FaRegQuestionCircle />} />
                    <NavLinkItem route={routes.contact} icon={<FaRegEnvelope />} />
                </ul>

            </nav>
        </div>
    );
};

export default NavBar;
