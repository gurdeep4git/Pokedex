import React, { Component } from "react";
import { connect } from "react-redux";
import { loadMore } from "../../actions/pokemonActions";

class LoadMoreButton extends Component {
    loadMoreClickHandler = offset => {
        this.props.loadMore(offset);
    };

    render() {
        const offsetVal = 20;
        return (
            <button
                className="btn btn-primary"
                onClick={this.loadMoreClickHandler.bind(this, offsetVal)}
            >
                Load More
            </button>
        );
    }
}

export default connect(
    null,
    { loadMore }
)(LoadMoreButton);
