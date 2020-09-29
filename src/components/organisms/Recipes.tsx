import React from "react";
import Card from "../molecules/Card";
import stewImg from "../../assets/img/stew.jpg";
import curryImg from "../../assets/img/curry.jpg";
import noodlesImg from "../../assets/img/noodles.jpg";
import Header from "../molecules/Header";
import { IPathNameProps } from "../../utils/interfaces";

const mockupRecipes = [
    {
        id: 1,
        img: stewImg,
        name: "stew",
        recipe: "5 Bean Chilli Stew",
        author: "Mario",
        prepareTime: 25
    },
    {
        id: 2,
        img: curryImg,
        name: "curry",
        recipe: "Tofu Curry",
        author: "Mario",
        prepareTime: 25
    },
    {
        id: 3,
        img: noodlesImg,
        name: "noodles",
        recipe: "Veg Noodles",
        author: "Mario",
        prepareTime: 25
    }
];


const Recipes: React.FC<IPathNameProps> = ({pathname}) => {
    return (
        <>
            <Header title={pathname} />

            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Ostatnie Przepisy</h4>
                <div className="mt-8 grid lg:grid-cols-3 gap-10">
                    { mockupRecipes.map(recipe => <Card key={recipe.id} {...recipe}/> )}
                </div>

                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Popularne Przepisy</h4>
                <div className="mt-8">
                    {/*cards go here*/}
                </div>
            </div>

            <div className="flex justify-center">
                <div
                    className="secondary-button hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50"
                >
                    więcej
                </div>
            </div>
        </>
    );
};

export default Recipes;
