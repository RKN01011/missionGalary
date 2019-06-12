import React from "react";
import Nav from "../nav";
import Footer from "../footer";

function About() {
    return(
<div className="About">
    <Nav />
    <header>
        <div className="staticSlide">
        <div className="textBlock">
        <h4 className="titleh4">About<br /> On The <span className="s1">S</span>
            <span className="s2">t</span>
            <span className="s3">a</span>
            <span className="s4">g</span>
            <span className="s5">e</span>
        </h4>
        </div>
        <div className="textBlock">
           <h2>I AM A DESCRIPTION. CLICK HERE TO EDIT.</h2>
           <p>I'm a paragraph. Click here to edit and add your own text. Is easy! Just click on "Edit Text" or double-click on me and you can add your own content and change fonts. Feel free to drag and drop anywhere on your page. I'm a great place for you to tell your story and let your customers know a little more about you.</p>
           <p>This is a great place to write a long text about your company and its services. You can use this space to go into details about your business. Talk about your team and about the services you provide. Tell your visitors about how you came up with the idea of starting your business and what makes it different from your competitors. Make your business stand out and show who you are. Tip: Add your own image by double-clicking on the image and clicking Swap Image.</p>
        </div>
        <div className="buttonBlock">
            <span>View Our Gallery</span>
        </div>
        </div>
    </header>
    <div className="imgAbout1" />
    <div className="ourTeam">
        <div className="ourTeamText">
            <h4>Our Team</h4>
            <p>I'm a paragraph. Click here to edit and add your own text. Is easy! Just click on "Edit Text" or double-click on me and you can add your own content and change fonts. Feel free to drag and drop anywhere on your page. I'm a great place for you to tell your story and let your customers know a little more about you.</p>
        </div>
        <div className="ourTeamImg" />
    </div>
    <Footer />
</div>
    )
}

export default About;