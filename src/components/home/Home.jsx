import React from "react";

import './Home.css'
import Header from "./hearder/Header";
import Footer from './footer/Footer';
import Categorias from "./categorias/Categorias";

const Home = () => {


    

    return (
        <div className="home">

            <Header/>
            
            <Categorias/>

            <h1>Home</h1>

            <Footer/>

        </div>
    )
}


export default Home