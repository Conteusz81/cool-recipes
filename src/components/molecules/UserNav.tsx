import React from 'react';
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const UserNav = () => {
    return (
        <div className="flex justify-center md:justify-end">
            <Link
                to={routes.login}
                className="primary-button hover:bg-primary hover:text-white md:border-2"
            >
                Log in
            </Link>
            <Link
                to={routes.register}
                className="primary-button hover:bg-primary hover:text-white md:border-2 ml-2"
            >
                Sign up
            </Link>
        </div>
    );
};

export default UserNav;
