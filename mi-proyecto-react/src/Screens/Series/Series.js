import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCards from "../../Components/ListaCards/ListaCards";
import React from "react";

let api_key = "726d3c7dadcda94f9c6c2ceccbd8737a"

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            dataFiltrada: [],
            loadingSeries: true,
            page: 1,
            valorInput: ''
        }
    }

    componentDidMount() {
        if (this.props.match.params.tipo === 'popular') {
            fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({series: data.results, loadingSeries: false, dataFiltrada: data.results})
            })

        } else {
            fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({series: data.results, loadingSeries: false, dataFiltrada: data.results})
            })
        }
    } 

     cargarMas(){
        this.setState({page: this.state.page+1}, () => {
                fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.tipo === 'popular' ? 'popular' : 'airing_today'}?api_key=${api_key}&page=${this.state.page}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ series: this.state.series.concat(data.results), dataFiltrada: this.state.series.concat(data.results), loading: false }, () => console.log(data.results))
                })
        })
    }

    manejarInput = (e) => {
        this.setState({valorInput: e.target.value}, () => {
            let dataFiltrada = this.state.series.filter((unaSerie) => {
                return unaSerie.name.toLowerCase().includes(this.state.valorInput.toLowerCase())
            })
            this.setState({dataFiltrada: dataFiltrada})
        })
    }

    render() {

        return (

            <div class="container">

                <Header />

                <form class="filter-form" action="results.html" method="get">
                    <input onChange={(e) => this.manejarInput(e)} type="text" class="" name="searchData" placeholder="Buscar..." value={this.state.valorInput} />
                    <button type="submit" class="btn btn-success btn-sm">Buscar</button>
                </form>

                    {this.state.loadingSeries ? <p>Cargando...</p> : (
                        <React.Fragment>
                            <h2 class="alert alert-primary">{this.props.match.params.tipo === 'popular' ? 'Popular series this week' : 'Airing today series this week'}</h2>
                            <ListaCards tipo= "tv" data={this.state.dataFiltrada} />
                        </React.Fragment>
                    )}

                <button onClick={() => this.cargarMas()} className="btn btn-primary">Cargar mas</button>


            </div>
        )
    }

}

export default Series;
