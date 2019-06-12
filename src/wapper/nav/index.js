import React, {Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component {
    constructor(){
        super();
        this.state = {
            classListMenu: "navMenu invise",
            classListIco: "ico menuIco"
        }
    }
    change = () => {
        if(this.state.classListIco === "ico menuIco")
        this.setState({classListMenu: "navMenu vise", classListIco: "ico crossIco"})
        else 
        this.setState({classListMenu: "navMenu invise", classListIco: "ico menuIco"})
    }
    render(){
    return(
<nav>
    <ul className={this.state.classListMenu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>Shows</li>
        <li>Gallery</li>
        <li>Classes</li>
        <li>Contact</li>
    </ul>
    <i className={this.state.classListIco} onClick={this.change}/>
</nav>
    )
    }
}

export default Nav;