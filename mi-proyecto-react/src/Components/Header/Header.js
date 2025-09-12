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

            <nav>
                <ul className="nav nav-tabs d-flex justify-content-around my-4">
                    <li class="nav-item">
                        <Link class= "nav-link" to="/"> Home </Link>
                    </li>
                    <li class="nav-item">
                        <a class= "nav-link" href="/peliculas/popular"> Popular Movies </a>
                    </li>
                    <li class="nav-item">
                        <a class= "nav-link" href="/peliculas/now_playing"> Now Playing Movies </a>
                    </li>
                    <li class="nav-item">
                        <a class= "nav-link" href="/series/popular"> Popular Series </a>
                    </li>
                    <li class="nav-item">
                        <a class= "nav-link" href="/series/airing_today"> Airing Today Series </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="favorites.html">Favoritas</a>
                    </li>
                </ul>
                <form class="search-form" action="results.html" method="get">
                    <input type="text" class="" name="searchData" placeholder="Buscar..." value="" />
                    <button type="submit" class="btn btn-success btn-sm">Buscar</button>
                </form>
            </nav>

        )
    }
}

export default Header;