import React, { Component } from "react";
import { connect } from "react-redux";
import { loadMore } from "../../actions/pokemonActions";

class LoadMoreButton extends Component {

    state={
        offsetVal:20
    }

    loadMoreClickHandler = () => {
        this.setState({offsetVal:this.state.offsetVal+20});
        this.props.loadMore(this.state.offsetVal);
    };

    render() {
        const {offsetVal} = this.state;
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
