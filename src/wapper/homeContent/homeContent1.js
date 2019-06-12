import React, {Component} from "react";

var interval;

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            arr: [{h4: "Welcome To Our Theater", h4mini: "WHO WE ARE", 
            p: "I'm a paragraph. Click here to edit and add your own text. I'm a great place for you to tell your story and let your customers know a little more about you",
            link: "Read more"},
            {h4: "Currently On Show", h4mini: "WHEN DARKNESS FALLS", 
            p: "I'm a paragraph. Click here to edit and add your own text. I'm a great place for you to tell your story and let your customers know a little more about you.",
            link: "See All Shows"},
            {h4: "View Our Gallery", h4mini: "THEATRE IN ACTION", 
            p: "I'm a paragraph. Click here to edit and add your own text. I'm a great place for you to tell your story and let your customers know a little more about you",
            link: "Meet The Team"},],
            transform: -0,
            whowasthat: [1,0,0]
        }
    }
    slide = (life, e) => {
        let n = this.state.transform;
        let i = document.getElementsByClassName("i");
        switch(life){
            case true:
        if(e.target.className === "i") {
        let clientD = e.target.dataset.dvig;
        n = +clientD;
        clearInterval(interval);
        }
        else 
        return
        break;
            case false:
        n = n - 70;
        break;
            default:
        break;        
        }
        n = (n < -140) ? 0 : n;
        if(i.length === 0){
        clearInterval(interval);
        return
        }
        if(n === 0){
        for(let r of i){
        r.classList.remove("iwite");
        }
        i[0].classList.add("iwite");
        }
        else if(n === -70){
        for(let r of i){
        r.classList.remove("iwite");
        }
        i[1].classList.add("iwite");
        }
        else if(n === -140){
        for(let r of i){
        r.classList.remove("iwite");
        }
        i[2].classList.add("iwite");
        }
        this.setState({transform: n})
    }
    componentDidMount() {
        interval = setInterval( () => this.slide(false) , 5000);
    }
    render(){
    return(
<div className="homeContent1">
<h4 className="titleh4">On The <span className="s1">WS</span>
    <span className="s2">t</span>
    <span className="s3">a</span>
    <span className="s4">g</span>
    <span className="s5">e</span>
</h4>
<div id="slider" onClick={(e) => this.slide(true, e)}>
    <div className="polosaSlide" style={{left: `${this.state.transform}vw`}}>
    {this.state.arr.map( (el, id) => {
        return(
        <div className="slid" key={id}>
        <div className="sliderList">
            <h5>{el.h4}</h5>
        </div>
        <div className="sliderListRight">
            <div className="listBlock">
            <h4>{el.h4mini}</h4>
            <p>{el.p}</p>
            <span>{el.link}</span>
            </div>
        </div>
        </div>
        )
    })}
    </div>
    <div className="interfaceSlide">
        <i className="i iwite" data-dvig={0}  />
        <i className="i" data-dvig={-70} />
        <i className="i" data-dvig={-140} />
    </div>
</div>
</div>
    )
    }
}

export default Nav;