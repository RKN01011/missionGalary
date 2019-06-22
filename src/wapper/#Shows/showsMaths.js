import React, {Component} from "react";

class mathShows extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: this.props.price || 20,
            qty: 0,
            total: 0
        }
    }
    change = (e) => {
        let set = this.state;
        console.log(this.props.def)
        if(e.target.className == "neg" && (this.props.def >= 0 && this.props.def <= 20)){
        this.props.plusTotal(set.price, 1, "neg");
        this.setState({qty: set.qty - 1, total: set.total - set.price })}
        else if(e.target.className == "plus" && (this.props.def >= 0 && this.props.def <= 20)){
        this.props.plusTotal(set.price, 1, "plus");
        this.setState({qty: set.qty + 1, total: set.total + set.price })}
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