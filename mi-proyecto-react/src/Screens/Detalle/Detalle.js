import { Component } from "react";
import Header from "../../Components/Header/Header";
import React from "react";

let api_key = "66374e925f9ce0061d8e10191732f374"

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            loadingMovie: true,
            serie: {},
            loadingSerie: true
        }
    }

    componentDidMount() {
        console.log(this.props);

        if (this.props.match.params.tipo == 'movie') {
            fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ movie: data, loadingMovie: false }, () => console.log(this.state))
                })
        } else if (this.props.match.params.tipo == 'tv') {
           
            fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ serie: data, loadingSerie: false }, () => console.log(this.state))
                })
        }
    }

    render() {

        return (

            <div div class="container">
                <h1>UdeSA Movies</h1>

                <Header />
                {this.props.match.params.tipo == 'movie' ?
                    this.state.loadingMovie ? <p>Cargando...</p> : (
                        <React.Fragment>

                            <h2 class="alert alert-primary">{this.state.movie.title}</h2>
                            <section class="row">
                                <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt="" />
                                <section class="col-md-6 info">
                                    <h3>Descripción</h3>
                                    <p class="description">{this.state.movie.overview}</p>
                                    <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno: </strong>{this.state.movie.release_date}</p>
                                    <p class="mt-0 mb-0 length"><strong>Duración: </strong>{this.state.movie.runtime}</p>
                                    <p class="mt-0" id="votes"><strong>Puntuación: </strong>{this.state.movie.vote_average}</p>
                                </section>
                            </section>
                        </React.Fragment>
                    )
                    :
                    this.state.loadingSerie ? <p>Cargando...</p> : (
                        <React.Fragment>

                            <h2 class="alert alert-primary">{this.state.serie.name}</h2>
                            <section class="row">
                                <section class="col-md-6 info">
                                    <h3>Descripción</h3>
                                    <p class="description">{this.state.serie.overview}</p>
                                    <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno: </strong>{this.state.serie.first_air_date}</p>
                                    <p class="mt-0 mb-0 length"><strong>Numero de Capitulos: </strong>{this.state.serie.number_of_episodes} </p>
                                    <p class="mt-0" id="votes"><strong>Temporadas: </strong>{this.state.serie.number_of_seasons}</p>
                                </section>
                                <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500/${this.state.serie.poster_path}`} alt="" />
                            </section>
                        </React.Fragment>
                    )}




            </div>
        )
    }

}

export default Detalle;