import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "./wapper/App";
import About from "./wapper/about"




export default class castomRouter extends React.Component{
    render(){
        return(
        <Router>
            <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/about" component={About}/>
            </Switch>
        </Router>
        )
    }

}