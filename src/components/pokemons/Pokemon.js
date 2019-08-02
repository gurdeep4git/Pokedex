import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPokemonByName } from "../../actions/pokemonActions";

class Pokemon extends Component {
    // state = {
    //     showContactInfo: false
    // };

    onClickHandler = name => {
        console.log(name);
        this.props.getPokemonByName(name);
    };

    render() {
        const { name } = this.props.pokemon;
        // const { showContactInfo } = this.state;

        return (
            <div className="card card-body mb-3">
                <h4
                // onClick={this.onClickHandler.bind(this, name)}
                >
                    {name}
                    <Link to={`pokemons/details/${name}`}>
                        <i
                            className="fas fa-external-link-alt"
                            style={{
                                cursor: "pointer",
                                float: "right",
                                color: "black",
                                marginRight: "1rem"
                            }}
                        />
                    </Link>
                    {/* <i
                        onClick={() =>
                            this.setState({
                                showContactInfo: !this.state.showContactInfo
                            })
                        }
                        className="fas fa-sort-down"
                        style={{ cursor: "pointer" }}
                    />
                    <i
                        className="fas fa-times"
                        style={{
                            cursor: "pointer",
                            float: "right",
                            color: "red"
                        }}
                        onClick={this.onDeleteClick.bind(this, id)}
                    />
                    <Link to={`contact/edit/${id}`}>
                        <i
                            className="fas fa-pencil-alt"
                            style={{
                                cursor: "pointer",
                                float: "right",
                                color: "black",
                                marginRight: "1rem"
                            }}
                        />
                    </Link> */}
                </h4>
                {/* {showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : null} */}
            </div>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.object.isRequired,
    getPokemonByName: PropTypes.func.isRequired
};

export default connect(
    null,
    { getPokemonByName }
)(Pokemon);
