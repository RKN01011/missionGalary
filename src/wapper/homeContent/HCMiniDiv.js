import React from "react";

function HCMiniDiv(props) {
    return (
        <div className="HCMiniDiv">
            <img src={props.img} alt="" />
            <div className="HCMDivText" style={{background: props.color}}>
                <p>{props.p}</p>
                <h4>{props.h4}</h4>
                <a className="linkBasik" href="ya.ru">{""}</a>
            </div>
        </div>
    )
};

export function HCMiniDivPlus(props) {
    return (
        <div className="HCMiniDiv">
            <img src={props.img} alt="" />
            <div className="HCMDivText HCMDivTextPlus" style={{background: props.color}}>
                <h4>{props.h4}</h4>
                <a className="linkRead" href="ya.ru">Read More</a>
            </div>
        </div>
    )
};

export default HCMiniDiv;