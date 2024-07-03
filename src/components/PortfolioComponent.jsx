import * as React from 'react';

export default function PortfolioComponent() {
    const projects = [
        {
            name:'WisataID',
            description:'WisataID adalah sebuah website Team Project',
            link:'https://wisataid.vercel.app/',
            image:'/images/wisataid.png'
        },
        {
            name:'YokNgopi',
            description:'YokNgopi adalah sebuah website Latihan Dicoding Indonesia',
            link:'https://yokngopicuy.netlify.app/#/list-restaurant',
            image:'/images/yokngopi.png'
        },
        {
            name:'OlshopMe',
            description:'OlshopMe adalah sebuah website Laravel on Progress',
            link:'https://github.com/farhnDev/OlshopMe.git',
            image:'/images/OlshopMe.png'
        },
        {
            name:'MovieCatalogue',
            description:'MovieCatalogue adalah sebuah website Latihan Dicoding Indonesia',
            link:'https://moviefreenich.netlify.app/',
            image:'/images/movie.png'
        }
    ]

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {projects.map((project) => (
                <div className="w-full" key={project.name}                         data-aos='fade-up'
                     data-aos-easing='liniear'
                     data-aos-delay="0">
                    <div className="bg-white h-full w-full justify-center items-center flex rounded-lg
                            overflow-hidden p-5 relative group">
                        <img src={project.image} alt={project.name} className="object-cover h-[150px] rounded-lg"/>
                        <div
                            className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition">
                            <div className="text-center w-full text-white mt-[-60px] group-hover:mt-[0] transition-all">
                                <div className="bg-white rounded-full px-5 inline-block mb-2">
                                    <h4 className="text-gradient">
                                        <a href={project.link} rel="noreferrer" target="_blank">
                                            {project.name}
                                        </a>
                                    </h4>
                                </div>
                                <p>
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
