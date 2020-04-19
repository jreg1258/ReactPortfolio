import React from 'react';

function Services() {
    return (
        <div>
        <section class="colorlib-services" data-section="services">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span class="heading-meta">What I do?</span>
							<h2 class="colorlib-heading">Here are some of my expertise</h2>
						</div>
					</div>
					<div class="row row-pt-md">
						<div class="col-md-4 text-center animate-box">
							<div class="services color-1">
								<span class="icon">
									<i class="icon-bulb"></i>
								</span>
								<div class="desc">
									<h3>Innovative Ideas</h3>
								</div>
							</div>
						</div>
						<div class="col-md-4 text-center animate-box">
							<div class="services color-2">
								<span class="icon">
									<i class="icon-bulb"></i>
								</span>
								<div class="desc">
									<h3>Teamwork</h3>
								</div>
							</div>
						</div>
						<div class="col-md-4 text-center animate-box">
							<div class="services color-3">
								<span class="icon">
									<i class="icon-bulb"></i>
								</span>
								<div class="desc">
									<h3>Diverse Viewpoints</h3>
								</div>
							</div>
						</div>
						<div class="col-md-4 text-center animate-box">
							<div class="services color-4">
								<span class="icon">
									<i class="icon-bulb"></i>
								</span>
								<div class="desc">
									<h3>Creative Design</h3>
								</div>
							</div>
						</div>
						<div class="col-md-4 text-center animate-box">
							<div class="services color-5">
								<span class="icon">
									<i class="icon-bulb"></i>
								</span>
								<div class="desc">
									<h3>Customer Service</h3>
								</div>
							</div>
						</div>
						<div class="col-md-4 text-center animate-box">
							<div class="services color-6">
								<span class="icon">
									<i class="icon-bulb"></i>
								</span>
								<div class="desc">
									<h3>Empathy</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<div id="colorlib-counter" class="colorlib-counters" style={{backgroundImage: "images/cover_bg_1.jpg"}} data-stellar-background-ratio="0.5">
				<div class="overlay"></div>
				<div class="colorlib-narrow-content">
					<div class="row">
					</div>
					<div class="row">
						<div class="col-md-4 text-center animate-box">
							<span class="colorlib-counter js-counter" data-from="0" data-to="436" data-speed="5000" data-refresh-interval="50"></span>
							<span class="colorlib-counter-label">Cups of coffee</span>
						</div>
						<div class="col-md-4 text-center animate-box">
							<span class="colorlib-counter js-counter" data-from="0" data-to="6000" data-speed="5000" data-refresh-interval="50"></span>
							<span class="colorlib-counter-label">Lines of Code</span>
						</div>
						<div class="col-md-4 text-center animate-box">
							<span class="colorlib-counter js-counter" data-from="0" data-to="20" data-speed="2000" data-refresh-interval="50"></span>
							<span class="colorlib-counter-label">Projects and counting</span>
						</div>
					</div>
				</div>
			</div>
</div>
    )
}

export default Services;