import { Component } from "react";
import Card from "../../Components/Card/Card";
import React from "react";
import Header from "../../Components/Header/Header";


let api_key = "726d3c7dadcda94f9c6c2ceccbd8737a"

class Buscador extends Component {
    constructor(props){
        super(props);
        this.state ={
            data: [],
            loading: true
        }
    }

    componentDidMount(){
        console.log(this.props);
       

        let urlParams = new URLSearchParams(this.props.location.search)
        let busqueda = urlParams.get('busqueda')
        let tipo = urlParams.get('tipo')
        console.log(busqueda);

        if (tipo === 'movie') {
            fetch(`https://api.themoviedb.org/3/search/movie?query=${busqueda}&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ data: data.results || [], loading: false });
            });

        } else {
            fetch(`https://api.themoviedb.org/3/search/tv?query=${busqueda}&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ data: data.results || [], loading: false });
            });
        }
        }

    render(){
        return(
            <React.Fragment>
                <Header />
                {this.state.loading ? <p>cargando...</p> : this.state.data.map(unPersonaje => <Card data={unPersonaje} />  )}
            </React.Fragment>
        )
    }

}

export default Buscador;