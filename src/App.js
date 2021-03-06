import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import SearchArea from "./components/SearchArea/SearchArea";
import SearchAreaContainer from "./components/SearchArea/SearchAreaContainer";

const App = () => {
    return (
        <div className="app-wrapper ">
            <Header />
            <div className="app-wrapper-content">
                <SearchAreaContainer />
            </div>
        </div>
    );
}

export default App;
