import React from 'react';

function Education() {
    return (
        <div><section class="colorlib-education" data-section="education">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">Education</span>
                    <h2 class="colorlib-heading animate-box">Education</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div class="fancy-collapse-panel">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                                <div class="panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Full Stack Development Bootcamp
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                     <div class="panel-body">
                                        <div class="row">
                                              <div class="col-md-6">
                                                <p>An intensive 24-week long boot camp dedicated to Full Stack Development. Completed April 2020.</p>										      		</div>
                                              <div class="col-md-6">
                                                  <p>Case Western Reserve University</p>
                                              </div>
                                          </div>
                                     </div>
                                </div>
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

export default Education;