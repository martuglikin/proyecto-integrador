import { Component } from "react";
import React from "react";
import './Card.css'
import { Link } from "react-router-dom";


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verDescripcion: false,
            textoBoton: 'Ver Descripción'
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

    //en el componentDidMountmanejar el mensaje de agregar o borrar

    render() {
        return (
            <React.Fragment>
            {this.props.tipo == 'movie' ? (
                <article className="single-card">
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} className="card-img-top" alt="..." />
                    <div className="cardBody">
                        <h5 className="card-title">{this.props.data.title}</h5>

                        <button className="btn btn-primary" onClick={() => this.alternarValor()}>{this.state.textoBoton}</button>
                        {this.state.verDescripcion? <p className="card-text">{this.props.data.overview}</p> : ''}

                        <Link to={`detalle/movie/${this.props.data.id}`} className="btn btn-primary">Ver más</Link>
                        <a href="" className="btn alert-primary">🩶</a>
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
                        <a href="" className="btn alert-primary">🩶</a> {/*este es el boton favoritos, aca va el onclikc*/} 
                    </div>
                </article>
            )}
            </React.Fragment>

        )
    }
}

export default Card;