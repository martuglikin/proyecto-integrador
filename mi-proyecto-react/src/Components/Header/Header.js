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
                <ul class="nav nav-tabs my-4">
                    <li class="nav-item">
                        <Link class= "nav-link" to="/"> Home </Link>
                    </li>
                    <li class="nav-item">
                        <Link class= "nav-link" to="/peliculas/:tipo"> Películas </Link>
                    </li>
                    <li class="nav-item">
                        <Link class= "nav-link" to="/series/:tipo"> Series </Link>
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