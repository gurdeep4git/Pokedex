import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Pokemon from "./Pokemon";
import LoadMoreButton from "../layout/LoadMoreButton";
import { getPokemons } from "../../actions/pokemonActions";

class Pokemons extends Component {
    componentDidMount() {
        this.props.getPokemons();
    }

    render() {
        const { pokemons } = this.props;
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2">
                    <span className="text-danger">Pokemons</span> List
                </h1>
                {pokemons.map(pokemon => (
                    <Pokemon key={pokemon.name} pokemon={pokemon} />
                ))}
                <LoadMoreButton />
            </React.Fragment>
        );
    }
}

Pokemons.propTypes = {
    pokemons: PropTypes.array.isRequired,
    getPokemons: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons
});

// const mapDispatchToProps = dispatch => ({
//     getContacts: () => dispatch({ type: GET_CONTACTS })
// });

export default connect(
    mapStateToProps,
    { getPokemons }
)(Pokemons);
