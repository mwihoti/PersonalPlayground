import React from "react";

const Header = (props) => {
    return (
        <header className="flex flex-col justify-center items-center align-center w-full bg-lightblue mb-20">
        <h1 className="text-3xl font-bold text-white text-shadow-md text-left">{props.title}</h1>
        <h2 className="text-xl font-bold text-white text-shadow-md text-left">{props.subtitle}</h2>
        </header>
    );
}
export default Header;