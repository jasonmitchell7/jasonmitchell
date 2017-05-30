require("../sass/Global.scss");

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Error404 from "./routes/Error404";
import Index from "./routes/Index";
import Layout from "./components/Layout";
import Projects from "./routes/Projects";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Index}/>
            <Route path="index" component={Index}/>
            <Route path="projects" component={Projects}/>
            <Route path="blog" component={Blog}/>
            <Route path="contact" component={Contact}/>

            <Route path='*' component={Error404}/>
        </Route>
    </Router>,
    app
);