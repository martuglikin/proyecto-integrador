import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Error(){
    return(
        <React.Fragment>
            <Header />
            <h1>Error404 - No se encontro la pagina</h1>
            <Footer />
        </React.Fragment>
    )
}

export default Error;