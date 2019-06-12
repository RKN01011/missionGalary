import React, {Component} from "react";
import ShowBlock from "./polosa";

class Shows extends Component {
    constructor(){
        super()
        this.state = {
           content: [

            { img: require("../../img/man.webp"), 
              h4: "When Darkness Falls", 
              data: "Jun 14, 2023, 8:00 PM", 
              color: "#ff0066" },

            { img: require("../../img/img1.webp"), 
              h4: "A Story Of Heartbreak", 
              data: "Jun 18, 2023, 8:00 PM", 
              color: "#01011d" },

            { img: require("../../img/img2.webp"), 
              h4: "The Improvisation Story", 
              data: "Jun 22, 2023, 8:00 PM", 
              color: "orangered" },

            { img: require("../../img/img4.webp"), 
              h4: "Thirst", 
              data: "Jun 26, 2023, 8:00 PM", 
              color: "#01011d80" } 

            ],

        }
    }
    render() {
        return(
            <div className="Shows">
                <header>
                 <div>
                    <h4>Upcoming <br /> Shows</h4>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” <br /> or double click me to add your own content and make changes to the font.</p>
                </div>
                <ShowBlock obj={this.state.content}/>
                </header> 
            </div>
        )
    }
}

export default Shows;