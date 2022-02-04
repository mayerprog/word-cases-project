import React from "react";
import h from "./Header.module.css";



const Header = () => {
    return (<header className={h.header}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/A_%28capital_and_small%29.svg/1200px-A_%28capital_and_small%29.svg.png"} />
            <h1>Word Case</h1>
        </header>
    );
};

export default Header;
