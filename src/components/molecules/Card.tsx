import React from 'react';
import { FiClock } from 'react-icons/fi';
import { ICardProps } from "../../utils/interfaces";

const Card: React.FC<ICardProps> = ({ img, name, recipe, author, prepareTime }) => {
    return (
        <div className="card">
            <img src={img} alt={name} className="w-full h-32 sm:h-48 object-cover"/>
            <div className="m-4">
                <span className="font-bold">{recipe}</span>
                <span className="block text-gray-500 text-sm">Recipe by {author}</span>
            </div>
            <div className="badge flex items-center">
                <FiClock className="w-5 inline-block"/>
                <span>{prepareTime} min</span>
            </div>
        </div>
    );
};

export default Card;
