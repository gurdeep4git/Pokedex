import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPokemonByName } from "../../actions/pokemonActions";

class PokemonDetails extends Component {
    state = {
        id: "",
        name: "",
        image: ""
    };

    componentDidMount() {
        const { name } = this.props.match.params;
        this.props.getPokemonByName(name);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.pokemon.id,
            name: nextProps.pokemon.name,
            image: nextProps.pokemon.sprites.front_default
        });
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         id: nextProps.pokemon.id,
    //         name: nextProps.pokemon.name,
    //         image: nextProps.pokemon.sprites.front_default
    //     };
    // }

    render() {
        return (
            <Fragment>
                <div
                    className="card"
                    style={{ width: "18rem" }}
                    id={this.state.id}
                >
                    <img
                        src={this.state.image}
                        className="card-img-top"
                        alt={this.state.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemonDataByName
});

PokemonDetails.propTypes = {
    pokemon: PropTypes.object.isRequired,
    getPokemonByName: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { getPokemonByName }
)(PokemonDetails);
