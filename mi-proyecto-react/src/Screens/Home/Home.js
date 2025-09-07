import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCards from "../../Components/ListaCards/ListaCards";
import { Link } from 'react-router-dom'

let api_key = "726d3c7dadcda94f9c6c2ceccbd8737a"

class Home extends Component {
    constructor(props){
        super(props);
        this.state= {
            popularMovies: [],
            loadingpopularMovies: true,
            nowMovies: [],
            loadingnowMovies: true,
            popularSeries: [],
            loadingpopularSeries: true,
            todaySeries: [],
            loadingtodaySeries: true
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => {
            this.setState({popularMovies: data.results, loadingpopularMovies: false})
        })

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => {
            this.setState({nowMovies: data.results, loadingnowMovies: false})
        })

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => {
            this.setState({popularSeries: data.results, loadingpopularSeries: false})
        })

        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => {
            this.setState({todaySeries: data.results, loadingtodaySeries: false})
        })
    }

    render() {

        return (

        <div div className="container">
            <h1>UdeSA Movies</h1>

             <Header />


            <h2 className="alert alert-primary">Popular movies this week <button className="btn btn-primary"> <Link to='/peliculas/popular'>Ver Más</Link></button></h2>
            {this.state.loadingpopularMovies ? <p>Cargando...</p> : <ListaCards tipo="movie" data={this.state.popularMovies.slice(0,5)} />}
            

            <h2 className="alert alert-primary">Now playing movies this week <button className="btn btn-primary"> <Link to='/peliculas/now_playing'>Ver Más</Link></button></h2>
            {this.state.loadingnowMovies ? <p>Cargando...</p> : <ListaCards tipo="movie" data={this.state.nowMovies.slice(0,5)} />}

            <h2 className="alert alert-primary">Popular series this week</h2>
            {this.state.loadingpopularSeries ? <p>Cargando...</p> : <ListaCards tipo="tv" data={this.state.popularSeries.slice(0,5)} />}

            <h2 className="alert alert-primary">Airing today series</h2>
            {this.state.loadingtodaySeries ? <p>Cargando...</p> : <ListaCards tipo="tv" data={this.state.todaySeries.slice(0,5)} />}
        </div>
        )
    }

}

export default Home;