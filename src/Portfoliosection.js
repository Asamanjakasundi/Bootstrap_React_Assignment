import React from "react";
import {
    Cabin,
    Cake,
    Circus,
    Game,
    Safe,
    Submarine
} from './assets/img/portfolio';

import Portfolio from "./Portfolio";




const Portfoliosection = () =>{
    return(
        <section className ="page-section portfolio" id="portfolio">
            <div className ="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className ="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- Icon Divider--> */}
                <div className ="divider-custom">
                    <div className ="divider-custom-line"></div>
                    <div className ="divider-custom-icon"><i className ="fas fa-star"></i></div>
                    <div className ="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className ="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <div className ="col-md-6 col-lg-4 mb-5">
                      <Portfolio dataBsTarget= "#portfolioModal1" image = {Cabin}/> 
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div className ="col-md-6 col-lg-4 mb-5">
                        <Portfolio dataBsTarget= "#portfolioModal2" image={Cake}/>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div className ="col-md-6 col-lg-4 mb-5">
                        <Portfolio dataBsTarget= "#portfolioModal3" image={Circus}/>
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div className ="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <Portfolio dataBsTarget= "#portfolioModal4" image={Game}/>
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div className ="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <Portfolio dataBsTarget= "#portfolioModal5" image={Safe}/>
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div className ="col-md-6 col-lg-4">
                        <Portfolio dataBsTarget= "#portfolioModal6" image={Submarine}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfoliosection;