import React from 'react';
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { INavLinkProps } from "../../utils/interfaces";
import { pathNameSlice } from "../../utils/parsers";

const NavLinkItem: React.FC<INavLinkProps> = ({ route, icon }) => {

    const navLinkName = route === routes.recipes ? '/przepisy' : route;
    return (
        <li className="py-1">
            <NavLink to={route} className="px-4 flex justify-end border-r-4 border-white" activeClassName="font-bold border-primary">
                <span className="capitalize">{pathNameSlice(navLinkName)}</span>
                {React.cloneElement(icon, {className: "w-4 h-5 ml-2"})}
            </NavLink>
        </li>
    );
};

export default NavLinkItem;
