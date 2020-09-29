import React from 'react';
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const UserNav = () => {
    return (
        <div className="flex justify-center mb-3 md:justify-end">
            <Link
                to={routes.login}
                className="primary-button hover:bg-primary hover:text-white md:border-2"
            >
                Zaloguj
            </Link>
            <Link
                to={routes.register}
                className="primary-button ml-2 hover:bg-primary hover:text-white md:border-2"
            >
                Rejestracja
            </Link>
        </div>
    );
};

export default UserNav;
