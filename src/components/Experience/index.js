import React from 'react';

function Experience() {
    return (
        <div><section class="colorlib-experience" data-section="experience">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">Experience</span>
                    <h2 class="colorlib-heading animate-box">Work Experience</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                 <div class="timeline-centered">
                     <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                        <div class="timeline-entry-inner">

                           <div class="timeline-icon color-1">
                              <i class="icon-pen2"></i>
                           </div>

                           <div class="timeline-label">
                              <h2><a href="#">IT Help Desk</a> <span>Feb.2020-present</span></h2>
                              <p>Assisted patients while maintaining high quality assurance scores.</p>
                           </div>
                        </div>
                     </article>


                     <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                        <div class="timeline-entry-inner">
                           <div class="timeline-icon color-2">
                              <i class="icon-pen2"></i>
                           </div>
                           <div class="timeline-label">
                               <h2><a href="#">Training Specialist</a> <span>Sept.2017- Sept.2019</span></h2>
                                <p>Contributed to company earning “Microsoft Partner of the Year 2018”.
                                    Travelled nationally to facilitate training for Fortune 500 companies.
                                    Promoted from Productivity Assistant in August, 2018.
                                    </p>
                        </div>
                        </div>
                     </article>

                    </div> 
               </div>
           </div>
        </div>
    </section></div>
    )
}

export default Experience;