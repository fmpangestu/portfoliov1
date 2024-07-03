import * as React from 'react';
import PortfolioComponent from "./PortfolioComponent";

export default function Portfolio() {
    return (
        <div id="portfolio" className="section">
            <div className="container mx-auto max-w-[1200px] px-3 pb-20">
                <div className="flex flex-col lg:align-center lg:flex-row justify-between mb-[50px]">
                    <div className="order-2 lg:order-1 mt-5"                         data-aos='fade-right'
                         data-aos-easing='liniear'
                         data-aos-delay="0">
                        <h4 className="text-secondary font-secondary text-[24px]">
                            Portfolio
                        </h4>
                        <div className="text-gradient font-primary max-w-[700px] mx-auto text-[24px]">
                            Project yang pernah saya buat, project pribadi dan team project
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 text-center"                         data-aos='fade-left'
                         data-aos-easing='liniear'
                         data-aos-delay="0">
                        <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
                            04
                        </h2>
                        <div>Best Projects</div>
                    </div>
                </div>
                <PortfolioComponent/>
            </div>
        </div>
    )
}
