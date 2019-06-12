import React, {Component} from "react";

import HCMiniDiv from "./HCMiniDiv";

class homeContent2 extends Component {
    constructor(){
        super();
        this.state = {
            pList: ["THURSDAY, MAY 25 AT 8 PM", "FRIDAY - MAY 26, AT 8 PM"],
            h4List: ["Thirst", "The Improvisation Story"],
            imgList: [require("../../img/img1.webp"), require("../../img/img2.webp")],
            colorList: ["#cc0000", "#ff0066"]
        }
    }
    render() {
    return (
        <div className="homeContent2">
            <h6>Upcoming shows</h6>
            <div className="SectionHCMiniDiv">
            <HCMiniDiv color={this.state.colorList[0]} img={this.state.imgList[0]} p={this.state.pList[0]} h4={this.state.h4List[0]} />
            <HCMiniDiv color={this.state.colorList[1]} img={this.state.imgList[1]} p={this.state.pList[1]} h4={this.state.h4List[1]} />
            </div>
        </div>
    )
    }
}

export default homeContent2;