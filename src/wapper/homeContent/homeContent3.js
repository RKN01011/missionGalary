import React, {Component} from "react";

import HCMiniDiv, {HCMiniDivPlus}  from "./HCMiniDiv";

class homeContent3 extends Component {
    constructor(){
        super();
        this.state = {
            h4List: ["Acting & Drama Classes", "Singing & Dance"],
            imgList: [require("../../img/img3.webp"), require("../../img/img4.webp")],
            colorList: ["#01011d"],
        }
    }
    render() {
    return (
        <div className="homeContent3">
            <h6>Our classes</h6>
            <div className="SectionHCMiniDiv">
            <HCMiniDivPlus color={this.state.colorList[0]} img={this.state.imgList[0]} h4={this.state.h4List[0]} />
            <HCMiniDivPlus color={this.state.colorList[0]} img={this.state.imgList[1]} h4={this.state.h4List[1]} />
            </div>
        </div>
    )
    }
}

export default homeContent3;