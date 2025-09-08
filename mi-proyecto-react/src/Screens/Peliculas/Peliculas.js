import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCards from "../../Components/ListaCards/ListaCards";
import React from "react";

let api_key = "726d3c7dadcda94f9c6c2ceccbd8737a"

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            dataFiltrada: [],
            loadingMovies: true,
            page: 1,
            valorInput: ''
        }
    }

    componentDidMount() {

        if (this.props.match.params.tipo == 'popular') {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ movies: data.results, dataFiltrada: data.results, loadingMovies: false })
                })

        } else {
            fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ movies: data.results, dataFiltrada: data.results, loadingMovies: false })
                })
        }


    }
    

    cargarMas(){
        this.setState({page: this.state.page+1}, () => {
                fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo == 'popular' ? 'popular' : 'now_playing'}?api_key=${api_key}&page=${this.state.page}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ movies: this.state.movies.concat(data.results), dataFiltrada: this.state.movies.concat(data.results), loading: false }, () => console.log(data.results))
                })
        })
    }

    manejarInput = (e) => {
        this.setState({valorInput: e.target.value}, () => {
            let dataFiltrada = this.state.movies.filter((unaPeli) => {
                return unaPeli.title.toLowerCase().includes(this.state.valorInput.toLowerCase())
            })
            this.setState({dataFiltrada: dataFiltrada})
        })
    }

    render() {

        return (

            <div div class="container">
                <h1>UdeSA Movies</h1>

                <Header />

                <form class="filter-form" action="results.html" method="get">
                    <input onChange={(e) => this.manejarInput(e)} type="text" class="" name="searchData" placeholder="Buscar..." value={this.state.valorInput} />
                    <button type="submit" class="btn btn-success btn-sm">Buscar</button>
                </form>

                    {this.state.loadingMovies ? <p>Cargando...</p> : (
                        <React.Fragment>
                            <h2 class="alert alert-primary">Popular movies this week </h2>
                            <ListaCards tipo="movie" data={this.state.dataFiltrada} />
                        </React.Fragment>
                    )}

                <button onClick={() => this.cargarMas()} className="btn btn-primary">Cargar mas</button>


            </div>
        )
    }

}

export default Peliculas;