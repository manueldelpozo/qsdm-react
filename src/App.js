import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Loadable from "react-loadable";

import FormContainer from "./js/components/container/FormContainer";
import Loading from './js/components/loading/Loading';

let loadableForm = Loadable({
    loader: () => import('./js/Components/container/FormContainer'),
    loading: Loading,
})

class App extends Component {
    render() {
        return <div className='app'><Route path="" component={FormContainer} /></div>
    }
}

export default App;