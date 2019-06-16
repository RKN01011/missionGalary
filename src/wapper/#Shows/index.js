import React, {Component} from "react";
import ShowBlock from "./polosa";

import Nav from "../nav";
import Footer from "../footer";

class Shows extends Component {
    constructor(){
        super()
        this.state = {
           content: [

            { img: require("../../img/man.webp"), 
              h4: "When Darkness Falls", 
              data: "Jun 14, 2023, 8:00 PM", 
              color: "#ff0066",
              i: 0 },

            { img: require("../../img/img1.webp"), 
              h4: "A Story Of Heartbreak", 
              data: "Jun 18, 2023, 8:00 PM", 
              color: "#01011d",
              i: 1 },

            { img: require("../../img/img2.webp"), 
              h4: "The Improvisation Story", 
              data: "Jun 22, 2023, 8:00 PM", 
              color: "#e90237",
              i: 2 },

            { img: require("../../img/img4.webp"), 
              h4: "Thirst", 
              data: "Jun 26, 2023, 8:00 PM", 
              color: "#01011d",
              i: 3 } 

            ],

        }
    }
    render() {
        return(
          <React.Fragment>
            <Nav />
            <div className="Shows">
                <header className="headerShow">
                 <div>
                    <h4><span>Up</span><span>coming</span> <br /> Shows</h4>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” <br /> or double click me to add your own content and make changes to the font.</p>
                </div>
                </header> 
                <ShowBlock obj={this.state.content}/>
            </div>
            <Footer />
            </React.Fragment>
        )
    }
}

export default Shows;