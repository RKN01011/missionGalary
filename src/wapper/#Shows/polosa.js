import React from "react";

let addShows = (props) => {
    return(
        <React.Fragment>
        { props.obj.map((el, id) => {
            return (
                <div className="showBlock" key={id}>
                    <img src={el.img} alt="" />
                    <div className="showBlockText" style={{backgroundColor: el.color}}>
                        <h4>{el.h4}</h4>
                        <p>I'm a paragraph. Click here to edit and add your own text.
                           Is easy! Just click on "Edit Text" or double-click on me and you
                           You can add your own content and switch fonts.</p>
                        <span>{el.data}</span>
                        <a href="ya.ru">Buy Now</a>
                    </div>
                </div>
            )
        })
             }
        </React.Fragment>
    )
}

export default addShows;