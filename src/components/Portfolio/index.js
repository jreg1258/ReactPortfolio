import React from 'react';
import bg1 from '../../images/img-1.jpg'
import bg2 from '../../images/img-2.jpg'
import bg3 from '../../images/img-3.jpg'
import bg4 from '../../images/img-4.jpg'
import bg5 from '../../images/img-5.jpg'
import bg6 from '../../images/img-6.jpg'

function Portfolio() {
    return (
        <div><section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span className="heading-meta">My Portfolio</span>
                    <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                </div>
            </div>
            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <p className="work-menu">Web Design</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                    <div className="project"><img className="project" src={bg1}></img>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="https://bagel-adventure.herokuapp.com/">Choose Your Own Adventure Game</a></h3>
                                <span>Website</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                    <div className="project"><img className="project" src={bg2}></img>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="https://jreg1258.github.io/Trouvaille/">Travel Assistant: "Trouvaille"</a></h3>
                                <span>Website</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                    <div className="project"><img className="project" src={bg3}></img>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="https://github.com/jreg1258/EmployeeDB">Mock Employee Database</a></h3>
                                <span>node.js</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                    <div className="project"><img className="project" src={bg4}></img>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="https://github.com/jreg1258/Team-Profile">Team Profile Generator</a></h3>
                                <span>node.js/Web Design</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                    <div className="project"><img className="project" src={bg5}></img>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="https://jreg1258.github.io/Weather-Dashboard/weather.html">Weather Dashboard</a></h3>
                                <span>Web Design</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                    <div className="project"><img className="project" src={bg6}></img>
                        <div className="desc">
                            <div className="con">
                                <h3><a href="https://github.com/jreg1258/EmployeeDB">Simple Employee Database</a></h3>
                                <span>node.js</span>
                                <p className="icon">
                                    <span><a href="#"><i className="icon-share3"></i></a></span>
                                    <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                    <span><a href="#"><i className="icon-heart"></i> 49</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    </section>
</div>
    )
}

export default Portfolio;