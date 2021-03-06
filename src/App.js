import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/auth/login";

import Pokemons from "./components/pokemons/Pokemons";
import PokemonDetails from "./components/pokemons/PokemonDetails";

// import AddContact from "./components/contacts/AddContact";
// import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
// import About from "./components/pages/About";
// import NotFound from "./components/pages/NotFound";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header branding="Pokedex" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Login} />
                                <Route
                                    exact
                                    path="/pokemons"
                                    component={Pokemons}
                                />
                                <Route
                                    exact
                                    path="/pokemons/details/:name"
                                    component={PokemonDetails}
                                />
                                {/* <Route
                                    exact
                                    path="/contact/add"
                                    component={AddContact}
                                />
                                <Route
                                    exact
                                    path="/contact/edit/:id"
                                    component={EditContact}
                                />
                                <Route exact path="/about" component={About} />
                                <Route component={NotFound} /> */}
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
