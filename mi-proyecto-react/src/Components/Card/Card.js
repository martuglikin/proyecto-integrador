import { Component } from "react";
import React from "react";
import './Card.css'
import { Link } from "react-router-dom";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verDescripcion: false,
            textoBoton: 'Ver Descripción',
            textoFav: '🩶'
        }
    }

    alternarValor(){
        if (this.state.verDescripcion === false){
        this.setState({
            verDescripcion: true, 
            textoBoton: "Ocultar descripción"
        })
        } else{
        this.setState({
            verDescripcion: false, 
            textoBoton: "Ver Descripción"
        })
        }
    }

    componentDidMount(){
        if(this.props.tipo === 'movie'){
        let pelisFavoritas = JSON.parse(localStorage.getItem('favoritos')); // JSON.parse para pasarlo de str
        console.log(pelisFavoritas)  
        if (pelisFavoritas !== null && pelisFavoritas.includes(this.props.data.id)) {
            this.setState({ textoFav: '❤️' });
        } else {
            this.setState({ textoFav: '🩶' });
    }
}
        if (this.props.tipo === 'tv'){
        let seriesFavoritas = JSON.parse(localStorage.getItem('favoritosSeries')); // JSON.parse para pasarlo de str
        console.log(seriesFavoritas)  
        if (seriesFavoritas !== null && seriesFavoritas.includes(this.props.data.id)) {
            this.setState({ textoFav: '❤️' });
        } else {
            this.setState({ textoFav: '🩶' });
    }
        }

  }
    

    manejarFavPeliculas() {
        let pelisFavoritas = JSON.parse(localStorage.getItem('favoritos')); 
        if (pelisFavoritas === null){
            pelisFavoritas = [];
        }
        if (pelisFavoritas.includes(this.props.data.id)){ //Si ya esta, lo quiero sacar
            pelisFavoritas = pelisFavoritas.filter(unId => {
                return unId !== this.props.data.id;
        })

        console.log(pelisFavoritas)

        this.setState({textoFav: '🩶'})
        }else{
            pelisFavoritas.push(this.props.data.id)
        this.setState({textoFav: '❤️'})
        }
        localStorage.setItem('favoritos', JSON.stringify(pelisFavoritas))
    }

    manejarFavSeries() {
        let seriesFavoritas = JSON.parse(localStorage.getItem('favoritosSeries')); 
        if (seriesFavoritas === null){
            seriesFavoritas = [];
        }
        if (seriesFavoritas.includes(this.props.data.id)){ //Si ya esta, lo quiero sacar
            seriesFavoritas = seriesFavoritas.filter(unId => {
                return unId !== this.props.data.id;
        })

        console.log(seriesFavoritas)

        this.setState({textoFav: '🩶'})
        }else{
            seriesFavoritas.push(this.props.data.id)
        this.setState({textoFav: '❤️'})
        }
        localStorage.setItem('favoritosSeries', JSON.stringify(seriesFavoritas))
    }




    //en el componentDidMountmanejar el mensaje de agregar o borrar

    render() {
        return (
            <React.Fragment>
            {this.props.tipo === 'movie' ? (
                <article className="single-card">
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} className="card-img-top" alt="..." />
                    <div className="cardBody">
                        <h5 className="card-title">{this.props.data.title}</h5>

                        <button className="btn btn-primary" onClick={() => this.alternarValor()}>{this.state.textoBoton}</button>
                        {this.state.verDescripcion? <p className="card-text">{this.props.data.overview}</p> : ''}

                        <Link to={`detalle/movie/${this.props.data.id}`} className="btn btn-primary">Ver más</Link>
                        <button className="btn alert-primary" onClick={()=> this.manejarFavPeliculas()}>{this.state.textoFav}</button> 
                    </div>
                </article>
            ) : (
                <article className="single-card">
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} className="card-img-top" alt="..." />
                    <div className="cardBody">
                        <h5 className="card-title">{this.props.data.name}</h5>

                        <button className="btn btn-primary" onClick={() => this.alternarValor()}>{this.state.textoBoton}</button>
                        {this.state.verDescripcion? <p className="card-text">{this.props.data.overview}</p> : ''}

                        <Link to={`/detalle/tv/${this.props.data.id}`} className="btn btn-primary">Ver más</Link>
                        <button className="btn alert-primary" onClick={()=> this.manejarFavSeries()}>{this.state.textoFav}</button> {/*este es el boton favoritos, aca va el onclikc*/} 
                    </div>
                </article>
            )}
            </React.Fragment>

        )
    }
}

export default Card;