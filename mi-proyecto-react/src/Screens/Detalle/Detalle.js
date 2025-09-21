import { Component } from "react";
import Header from "../../Components/Header/Header";
import React from "react";
import './Detalle.css';

let api_key = "66374e925f9ce0061d8e10191732f374"

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            loadingMovie: true,
            serie: {},
            loadingSerie: true,
            textoFav: '🩶'
        }
    }

    componentDidMount() {
        console.log(this.props);

        if (this.props.match.params.tipo === 'movie') {
            fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ movie: data, loadingMovie: false }, () => {
                        let pelisFavoritas = JSON.parse(localStorage.getItem('favoritos')); 
                        console.log(pelisFavoritas)  
                        if (pelisFavoritas !== null && pelisFavoritas.includes(this.state.movie.id)) {
                            this.setState({ textoFav: '❤️' });
                        } else {
                            this.setState({ textoFav: '🩶' });
                        }
                    });
                })
        } else if (this.props.match.params.tipo === 'tv') {
            fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ serie: data, loadingSerie: false }, () => {
                        let seriesFavoritas = JSON.parse(localStorage.getItem('favoritosSeries')); 
                        console.log(seriesFavoritas)  
                        if (seriesFavoritas !== null && seriesFavoritas.includes(this.state.serie.id)) {
                            this.setState({ textoFav: '❤️' });
                        } else {
                            this.setState({ textoFav: '🩶' });
                        }
                    });
                })
        }
    }

    manejarFavPeliculas() {
        let pelisFavoritas = JSON.parse(localStorage.getItem('favoritos')); 
        if (pelisFavoritas === null){
            pelisFavoritas = [];
        }
        if (pelisFavoritas.includes(this.state.movie.id)){ 
            pelisFavoritas = pelisFavoritas.filter(unId => unId !== this.state.movie.id);
            this.setState({textoFav: '🩶'})
        } else {
            pelisFavoritas.push(this.state.movie.id);
            this.setState({textoFav: '❤️'})
        }
        localStorage.setItem('favoritos', JSON.stringify(pelisFavoritas))
    }

    manejarFavSeries() {
        let seriesFavoritas = JSON.parse(localStorage.getItem('favoritosSeries')); 
        if (seriesFavoritas === null){
            seriesFavoritas = [];
        }
        if (seriesFavoritas.includes(this.state.serie.id)){ 
            seriesFavoritas = seriesFavoritas.filter(unId => unId !== this.state.serie.id);
            this.setState({textoFav: '🩶'})
        } else {
            seriesFavoritas.push(this.state.serie.id);
            this.setState({textoFav: '❤️'})
        }
        localStorage.setItem('favoritosSeries', JSON.stringify(seriesFavoritas))
    }

    render() {
        return (
            <div className="container">
                <Header />
                {this.props.match.params.tipo === 'movie' ?
                    this.state.loadingMovie ? <p>Cargando...</p> : (
                        <React.Fragment>
                            <h2 className="alert alert-primary">{this.state.movie.title}</h2>
                            <section className="row">
                                <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`} alt="" />
                                <section className="col-md-6 info">
                                    <h3>Sinópsis</h3>
                                    <p className="description">{this.state.movie.overview}</p>
                                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno: </strong>{this.state.movie.release_date}</p>
                                    <p className="mt-0 mb-0 length"><strong>Duración: </strong>{this.state.movie.runtime}</p>
                                    <p className="mt-0" id="votes"><strong>Raiting: </strong>{this.state.movie.vote_average}</p>
                                    <p className="genres-title"><strong>Géneros:</strong></p>
                                    <ul className="genres-list">
                                        {this.state.movie.genres &&
                                            this.state.movie.genres.map((g) => (
                                                <li className="genres-item" key={g.id}>{g.name}</li>
                                            ))}
                                    </ul>
                                    <button className="btn alert-primary" onClick={()=> this.manejarFavPeliculas()}>{this.state.textoFav}</button> 
                                </section>
                            </section>
                        </React.Fragment>
                    )
                    :
                    this.state.loadingSerie ? <p>Cargando...</p> : (
                        <React.Fragment>
                            <h2 className="alert alert-primary">{this.state.serie.name}</h2>
                            <section className="row">
                                <section className="col-md-6 info">
                                    <h3>Sinópsis</h3>
                                    <p className="description">{this.state.serie.overview}</p>
                                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno: </strong>{this.state.serie.first_air_date}</p>
                                    <p className="mt-0 mb-0 length"><strong>Numero de Capitulos: </strong>{this.state.serie.number_of_episodes} </p>
                                    <p className="mt-0" id="votes"><strong>Temporadas: </strong>{this.state.serie.number_of_seasons}</p>
                                    <p className="mt-0" id="votes"><strong>Raiting: </strong>{this.state.serie.vote_average}</p>
                                    <ul className="genres-list">
                                        {this.state.serie.genres &&
                                            this.state.serie.genres.map((g) => (
                                                <li className="genres-item" key={g.id}>{g.name}</li>
                                            ))}
                                    </ul>
                                    <button className="btn alert-primary" onClick={()=> this.manejarFavSeries()}>{this.state.textoFav}</button>
                                </section>
                                <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500/${this.state.serie.poster_path}`} alt="" />
                            </section>
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}

export default Detalle;

