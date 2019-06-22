import React, {Component} from "react";
import { openMenu as open } from "../../motor";
import { connect } from "react-redux";
import Math from "./showsMaths";
import { plusTotal } from "../../action/after.action";

class addShows extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
    return(
        <React.Fragment>
        { this.props.obj.map((el, id) => {
            return (
                <div className="showBlock" key={id}>
                    <div className="imgDiv"><img src={el.img} alt="" /></div> 
                    <div 
                    className="showBlockText" 
                    style={{backgroundColor: `${el.color}90`}} 
                    onClick={open}>
                        <h4>{el.h4}</h4>
                        <p className="textP">I'm a paragraph. Click here to edit and add your own text.
                           Is easy! Just click on "Edit Text" or double-click on me and you
                           You can add your own content and switch fonts.</p>
                        <span>{el.data}</span>
                        <span className="openMenu" href="ya.ru" style={{color: el.color}} data-chose={el.i}>Buy Now</span>
                        <div className="buyMenu" style={{backgroundColor: el.color}}>
                            <div className="headBuyMenu">
                                <h4>{el.h4}</h4>
                                <span>{el.data}</span>
                                <i className="crossBuyMenu" data-chose={el.i} />
                            </div>
                            <div className="menuCoreBlock">
                               <div className="tablePrice">
                                   <span>Tickets</span>
                                   <span>Price</span>
                                   <span>Qty</span>
                                   <span>Total</span>
                                   <span>Student</span>
                                   <Math price={20} plusTotal={this.props.plusTotal} def={this.props.content[1]}/>
                                   <span>Regular</span>
                                   <Math price={25} plusTotal={this.props.plusTotal} def={this.props.content[1]}/>
                                </div>  
                            </div>
                            <div className="buttonMenuBlock">
                            {this.props.content[0]}
                            </div> 
                        </div>
                    </div>
                </div>
            )
        })
             }
        </React.Fragment>
    )
            }
}

export default connect(
    (storeContent) => {
        return {
        content: storeContent.content,
        }
    },
    (dispatch)=>{
        return{
          async plusTotal(n, def, type){
            const action = await plusTotal(n, def, type);
            dispatch(action);
          },     
        }
    }
) (addShows);