import * as React from 'react';
export default function SkillComponents() {
    const languages = [
        {
            name: 'NEXT JS',
            image: 'https://seekicon.com/free-icon-download/next-js_1.png',
            description: 'PHP adalah bahasa pemrograman server-side yang digunakan developer web.',
            link: 'https://nextjs.org/',
        },
        {
            name: 'JS',
            image: 'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png',
            description: 'JavaScript adalah bahasa pemrograman digunakan untuk web interaktif.',
            link: 'https://www.javascript.com/',
        },
        {
            name: 'React',
            image: 'https://www.vluxcreations.com/images/react-logo.png',
            description: 'React adalah library JavaScript untuk membangun antarmuka pengguna.',
            link: 'https://id.react.dev/',
        },
        {
            name: 'Tailwind',
            image: 'https://logospng.org/download/tailwind-css/tailwind-css-1024.png',
            description: 'Tailwind CSS adalah framework CSS yang sangat disesuaikan.',
            link: 'https://tailwindcss.com/',
        },
        {
            name: 'MySQL',
            image: 'https://www.pngplay.com/wp-content/uploads/7/Mysql-Logo-PNG-HD-Quality.png',
            description: 'MySQL adalah sistem manajemen basis data relasional open-source.',
            link: 'https://www.mysql.com/',
        },
        {
            name: 'Express JS',
            image: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png',
            description: 'Express.js adalah kerangka kerja web untuk Node.js.',
            link: 'https://expressjs.com/',
        },
        {
            name: 'Laravel',
            image: 'https://www.secret-source.eu/wp-content/uploads/2017/11/Laravel-logo.jpg',
            description: 'Laravel adalah Framework aplikasi web berbasis PHP.',
            link: 'https://laravel.com/',
        },
        {
            name: 'Node.js',
            image: 'https://static.cdnlogo.com/logos/n/49/node-js.svg',
            description: 'Node.js adalah runtime untuk developer.',
            link: 'https://nodejs.org/',
        },
    ];

    return (
        <div className="w-full lg:pt-[50px]">
            <div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center justify-center place-items-center">
                {languages.map((language) => (
                    <div className="w-3/4 h-4/4" key={language.name}                         data-aos='fade-left'
                         data-aos-easing='liniear'
                         data-aos-delay="500">
                        <div
                            className="bg-white h-full justify-center items-center flex overflow-hidden relative rounded-3xl p-5 group">
                            <div
                                className="rounded-lg absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex
                                items-center opacity-0 scale-0 group-hover:scale-100
                                group-hover:opacity-100 transition ease-linear"
                            >
                                <div className="text-center w-full text-black">
                                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                        <h4 className="text-gradient">
                                            <a href={language.link} rel="noreferrer" target="_blank"
                                               title={language.name}>
                                                {language.name}
                                            </a>
                                        </h4>
                                    </div>
                                    {/*<p className="text-black">*/}
                                    {/*    {language.description}*/}
                                    {/*</p>*/}
                                </div>
                            </div>
                            <img
                                src={language.image}
                                alt={language.name}
                                className="rounded-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
