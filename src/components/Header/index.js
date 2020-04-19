import React from "react"


function Header() {
    return (
    <div id="colorlib-page">
        <div className="container-wrap">
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img"></div>
                        <h1 id="colorlib-logo"><a href="index.html">Joseph Register</a></h1>
                        <span className="position"><a href="#">Fullstack Developer</a> in Cleveland, OH</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                                <li><a href="/About" data-nav-section="about">About</a></li>
                                <li><a href="/Services" data-nav-section="services">Services</a></li>
                                <li><a href="#" data-nav-section="skills">Skills</a></li>
                                <li><a href="#" data-nav-section="education">Education</a></li>
                                <li><a href="#" data-nav-section="experience">Experience</a></li>
                                <li><a href="#" data-nav-section="work">Portfolio</a></li>
                                <li><a href="#" data-nav-section="contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>

        <div className="colorlib-footer">
            <ul>
                <li><a href="https://www.linkedin.com/in/jreg/">Connect with me on LinkedIn <i className="icon-linkedin2"></i></a></li>
            </ul>
            <p>
                <small>
                    <script>{document.write(new Date().getFullYear())};</script> 
                    All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i>
                    by <a href="https://colorlib.com" target="_blank">Colorlib</a> 
                    <span>Image Credits: Maya Curtis & Joseph Register</span></small></p>
            
        </div>

    </aside>
    </div>
    </div>
)
}


export default Header;