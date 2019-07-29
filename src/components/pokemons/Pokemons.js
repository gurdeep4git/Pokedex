import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Pokemon from "./Pokemon";
import LoadMoreButton from "../layout/LoadMoreButton";
import { getPokemons, getPokemonsSuccess, getPokemonsFail } from "../../actions/pokemonActions";

class Pokemons extends Component {
    componentDidMount() {
        this.props.getPokemons();
    }

    render() {
        const { pokemons, isFetching } = this.props;
        console.log("complete",this.props.complete);
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2">
                    <span className="text-danger">Pokemons</span> List
                </h1>
                {isFetching ? (
                    <p>Loading...</p>
                ) : (
                    pokemons.map((pokemon,i) => (
                        <Pokemon key={i} pokemon={pokemon} />
                    ))
                )}
                <LoadMoreButton />
            </React.Fragment>
        );
    }
}

Pokemons.propTypes = {
    pokemons: PropTypes.array.isRequired,
    isFetching:PropTypes.bool.isRequired,
    getPokemons: PropTypes.func.isRequired,
    getPokemonsSuccess:PropTypes.func.isRequired,
    getPokemonsFail:PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    pokemons: state.pokemon.pokemons,
    isFetching:state.pokemon.isFetching,
    errorMsg:state.pokemon.error
});

// const mapDispatchToProps = dispatch => ({
//     getContacts: () => dispatch({ type: GET_CONTACTS })
// });

export default connect(
    mapStateToProps,
    { getPokemons, getPokemonsSuccess, getPokemonsFail }
)(Pokemons);
