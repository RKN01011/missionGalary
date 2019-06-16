import React, {Component} from "react";

class mathShows extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: this.props.price || 20,
            def: this.props.def || 20,
            qty: 0,
            total: 0
        }
    }
    change = (e) => {
        let set = this.state;
        if(e.target.className == "neg" && (set.def >= 1 && set.def <= 20))
        this.setState({def: set.def + 1, qty: set.qty - 1, total: set.total - set.price })
        else if(e.target.className == "plus" && (set.def >= 1 && set.def <= 20))
        this.setState({def: set.def - 1, qty: set.qty + 1, total: set.total + set.price })
        else 
        return
    }
    render(){
        return(
          <React.Fragment>
            <span>${this.state.price}</span>
            <div className="interfaceMenu">
            <i className="neg" onClick={this.change}>-</i>
            <p>{this.state.qty}</p>
            <i className="plus" onClick={this.change}>+</i>
            </div>
            <span>${this.state.total}</span>
          </React.Fragment>  
        )
    }
}

export default mathShows;