import React, { Component } from "react";
import ReactDOM from "react-dom";
import FormContainer from "./js/components/container/FormContainer";

import styles from './app.scss';

class App extends Component {
    render() {
        return <div><FormContainer/></div>
    }
}

const app = document.getElementById("root");
app ? ReactDOM.render(<App />, app) : false;