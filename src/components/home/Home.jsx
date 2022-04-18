import React from "react";

import './Home.css'
import Header from "./hearder/Header";
import Footer from '../footer/Footer.jsx';
import Categorias from "./categorias/Categorias";
import Feed from "./feed/Feed";

const Home = () => {




    return (
        <div className="home">
            <Header />
            <Categorias />
            <Feed />
            <Footer />
        </div>
    )
}


export default Home