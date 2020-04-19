import React from 'react';
import './style.css'
import bg1 from '../../images/img_bg_1.jpg'
import bg2 from '../../images/img_bg_2.jpg'


function Info() {
    return (
        <div>
            <section id="colorlib-hero" class="js-fullheight" data-section="home">
				   		    <div class="container-fluid">
				   			    <div class="row">
					   			    <div>
					   				    <div class="slider-text-inner js-fullheight">
					   					    <div class="desc">
						   					    <h1>Hi! <br></br>I'm Joey</h1>
						   					    <h2>I use HTML5, CSS, MySQL, node, and much more!</h2>
												    <p><a href="assets/JRegisterDeveloperResume2020.docx" class="btn btn-primary btn-learn">Download Resume <i class="icon-download4"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
						   <img src={bg2}  className="headerPic"></img>
				   		<div class="container-fluid">
				   			<div class="row">
					   			<div>
									   <div class="slider-text-inner">
					   					<div class="desc">
						   					<h1>I am <br></br>a Full Stack Developer</h1>
												<p><a href="#work">View Portfolio <i class="icon-briefcase3"></i></a></p>
											</div>
					   				</div>
					   			</div>
					   		</div>
				   		</div>
			  
			</section>
            </div>
    )
}

export default Info;