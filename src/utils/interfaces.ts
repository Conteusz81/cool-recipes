import React from "react";

export interface ICardProps {
    img: string;
    name: string;
    recipe: string;
    author: string;
    prepareTime: number;
}

export interface IPathNameProps {
    pathname: string;
}

export interface IPageTitleProps {
    title: string;
}

export interface INavLinkProps {
    route: string;
    icon: React.ReactElement;
}
