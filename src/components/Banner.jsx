import * as React from 'react';
import {TypeAnimation} from "react-type-animation";

export default function Banner() {
    return (
        <div id="home" className="section container mx-auto
        max-w-[1200px] px-3 items-center">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center space-x-50 lg:space-x-60" data-aos="zoom-in">
                <div>
                    <div className="block text-center font-secondary font-black text-[30px] text-xs sm:text-sm md:text-base lg:text-lg">
                        Hello, I am
                        <div>
                            <TypeAnimation sequence={[
                                "Farhan Maulana Pangestu",
                                1000,
                                "Junior Web Developer",
                                2000,
                                "JavaScript Developer",
                                2000,
                            ]}
                                           wrapper="span"
                                           cursor={true}
                                           repeat={Infinity}
                                           className="ml-3 text-secondary text-xs sm:text-sm md:text-base lg:text-lg"
                            />
                        </div>
                    </div>
                    <div className="max-w-[750px] text-center mx-auto mt-3 text-xs sm:text-sm md:text-base lg:text-lg">
                        <p>Railah ImpianMu dan Jangan Pernah Menganggap DiriMu Lemah!</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src="../images/Coding-bro.svg" alt="hero" className="w-full lg:w-[500px] "/>
                </div>
            </div>
        </div>
    )
}
