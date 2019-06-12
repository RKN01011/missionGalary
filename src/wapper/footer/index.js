import React from "react";

function footer () {
    return (
        <footer>
            <div className="footerDivLeft">
                <div>
                    <h4>CONTACT US</h4>
                    <p>500 Terry Francois Street San Francisco, CA 94158​ 
                        Tel: 123-456-7890 / Fax: 123-456-7890</p>
                    <p>© 2023 by On The Stage.</p>
                </div>
            </div>
            <div className="footerDivRight">
                <div>
                    <h4>OPENING HOURS</h4>
                    <ul>
                        <li>Monday - Friday: 8:30am - 7:30pm</li>
                        <li>Saturday: 9:00am - 5:00pm​</li>
                        <li>Sunday: 9:00am - 7:00pm</li>
                    </ul>
                    <p className="linkPolosaFooter">
                        <a><img src={require("../../img/youtube.svg")} alt=""/></a>
                        <a><img src={require("../../img/instagram-icon.svg")} alt=""/></a>
                        <a><img src={require("../../img/twitter.svg")} alt=""/></a>
                        <a><img src={require("../../img/facebook.svg")} alt=""/></a>
                    </p>
                </div>
            </div>
        </footer>
    )
}


export default footer;