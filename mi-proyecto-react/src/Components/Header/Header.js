import { Component } from "react";
import './Header.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div className="container">

                <div className="containerTitulo">
                <h1>UdeSA Movies</h1>
                <img src="/images/logoProgra.jpg" class="header-icon"/>
                </div>

                <nav>
                    <div className="navbar">
                        <Link to="/">Home</Link>

                        <div className="dropdown">
                        <button className="dropbtn">
                            Ver todo ▾
                        </button>
                        <div className="dropdown-content">
                            <a href="/peliculas/popular">Popular Movies</a>
                            <a href="/peliculas/now_playing">Now Playing Movies</a>
                            <a href="/series/popular">Popular Series</a>
                            <a href="/series/airing_today">Airing Today Series</a>
                        </div>
                        </div>

                        <Link to="/favoritos">Favoritos</Link>
                    </div>

                    <form className="search-form" action="/buscador" method="get">
                    <input type="text" name="busqueda" placeholder="Buscar..." />
                    <div className="radio-group">
                        <label>
                        <input type="radio" name="tipo" value="movie" /> Movie
                        </label>
                        <label>
                        <input type="radio" name="tipo" value="tv" /> Serie
                        </label>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                    </form>

                </nav>

            </div>

        )
    }
}

export default Header;