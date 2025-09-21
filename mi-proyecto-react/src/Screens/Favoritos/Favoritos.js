import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";

let api_key = "726d3c7dadcda94f9c6c2ceccbd8737a"

class Favoritos extends Component {
    constructor(props){
        super(props);
        this.state= {
            data: [],
            dataSerie: [],
            loadingPeli: 0,
            limitePeli: 0,
            loadingSerie: 0,
            limiteSerie: 0,
        }
    }

componentDidMount(){

  let pelisFavoritas  = JSON.parse(localStorage.getItem('favoritos'));
  let seriesFavoritas = JSON.parse(localStorage.getItem('favoritosSeries'));

  this.setState({
    limitePeli: pelisFavoritas.length,
    limiteSerie: seriesFavoritas.length
  });

  // PELÍCULAS
  pelisFavoritas.map(unId => {
    fetch(`https://api.themoviedb.org/3/movie/${unId}?api_key=${api_key}`)
      .then(res => res.json())
      .then(unaPeli => {
        const listaMovies = this.state.data;   
        listaMovies.push(unaPeli);             
        this.setState({
          data: listaMovies,
          loadingPeli: this.state.loadingPeli + 1
        });
      });
  });

  // SERIES 
  seriesFavoritas.map(unId => {
    fetch(`https://api.themoviedb.org/3/tv/${unId}?api_key=${api_key}`)
      .then(res => res.json())
      .then(unaSerie => {
        const listaSeries = this.state.dataSerie; 
        listaSeries.push(unaSerie);
        this.setState({
          dataSerie: listaSeries,
          loadingSerie: this.state.loadingSerie + 1
        });
      });
  });
}


    render() {

        return (
            <React.Fragment>
                <Header/>
                <b><p>Peliculas Favoritas:</p></b>
                {this.state.limitePeli === 0 || this.state.data.length === 0 //muestra el mensaje si no hay IDs o si no llegó ningún dato 
                  ? <p>No hay peliculas favoritas.</p>
                  : this.state.data.map((unaPeli) => (
                      <Card key={unaPeli.id} data={unaPeli} tipo="movie" />
                    ))
                }

                  <b><p>Series Favoritas:</p></b>
                    {this.state.limiteSerie === 0
                    ? <p>No hay series favoritas.</p>
                    : (this.state.dataSerie ).map((unaSerie, idx) => (
                        <Card key={idx} data={unaSerie} tipo="tv" />
                        ))
                    }

                    <Footer />
            </React.Fragment>
        
        )
    }

}

export default Favoritos;