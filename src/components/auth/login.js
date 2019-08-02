import React, { Component, Fragment } from "react";
import TextInputGroup from "../layout/TextInputGroup";

class Login extends Component {
    state = {
        email: "admin@test.com",
        password: "12345",
        errors: {}
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmitHandler = e => {
        e.preventDefault();
        if (this.validate(this.state.email, this.state.password)) {
            this.props.history.push("/pokemons");
        }
    };

    validate = (email, password) => {
        let status = true;
        // Check For Errors
        if (email === "") {
            this.setState({ errors: { email: "Email is required" } });
            status = false;
            return;
        }

        if (email !== "admin@test.com") {
            this.setState({ errors: { email: "Email is not valid" } });
            status = false;
            return;
        }

        if (password === "") {
            this.setState({ errors: { password: "Password is required" } });
            status = false;
            return;
        }

        if (password !== "12345") {
            this.setState({
                errors: { password: "password is not valid" }
            });
            status = false;
            return;
        }

        return status;
    };

    render() {
        const { email, password, errors } = this.state;

        return (
            <Fragment>
                <form onSubmit={this.onSubmitHandler}>
                    <TextInputGroup
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                    />

                    <TextInputGroup
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.onChange}
                        error={errors.password}
                    />

                    <button className="btn btn-primary">Login</button>
                </form>
            </Fragment>
        );
    }
}

export default Login;
