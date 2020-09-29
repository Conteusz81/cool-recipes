import React from 'react';
import Header from "../molecules/Header";
import { IPathNameProps } from "../../utils/interfaces";
import useForm from "../../custom-hooks/useForm";

const initialState = {
    email: '',
    password: ''
};

const Login: React.FC<IPathNameProps> = ({pathname}) => {
    const {state, handleChange} = useForm(initialState);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("form", state);
    }

    return (
        <div>
            <Header title={pathname} />
            <div className="w-full mt-12 md:mt-20">
                <form className="bg-white shadow-md rounded px-4 py-4 md:px-8 md:py-8" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            id="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Hasło
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            onChange={handleChange}
                        />
                            {/*<p className="text-red-500 text-xs italic">Please choose a password.</p>*/}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Zaloguj
                        </button>
                        {/*<a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"*/}
                        {/*   href="#">*/}
                        {/*    Zapomniałeś hasła?*/}
                        {/*</a>*/}
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;
