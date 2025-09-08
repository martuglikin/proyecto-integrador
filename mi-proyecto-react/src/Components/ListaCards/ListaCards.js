import { Component } from "react";
import React from "react";
import './ListaCards.css'
import Card from "../Card/Card";


class ListaCards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        console.log(this.props)
    }

    render() {
        return (
            <section class="row cards">
                {this.props.data.map((unItem, idx) => <Card tipo={this.props.tipo} data={unItem} key={idx} />) }
            </section>
        )
    }
}

export default ListaCards;