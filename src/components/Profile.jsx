import * as React from 'react';
import { motion } from 'framer-motion';
import SkillComponents from "./SkillComponents";

export default function Profile() {
    const linkedInProfileImageUrl = 'https://media.licdn.com/dms/image/D5603AQG53a9aUmucrA/profile-displayphoto-shrink_400_400/0/1703938752263?e=1709769600&v=beta&t=nTBcVJx2EyDPdtB6oMwG0QMUJ5J7sAtBdfwMGLWqsks';
    return (
        <div id="profile" className="section">
            <div className="container mx-auto max-w-[1200px] p-1 overflow-hidden">
                <div className="font-secondary text-center font-bold mb-12"
                     data-aos='fade-down'
                     data-aos-easing='liniear'
                     data-aos-delay="500">
                    <h4 className="text-secondary mb-3">My Skill</h4>
                    <h2 className="text-gradient font-primary max-w-[700px] mx-auto">Semua apa yang kita inginkan akan
                        terjadi, kalau kita mempunyai rasa semangat</h2>
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <div className="text-center w-full max-w-[400px] mx-auto mb-[50px]"
                         data-aos='fade-right'
                         data-aos-easing='liniear'
                         data-aos-delay="500">
                        <div className="w-[200px] sm:w-[300px] lg:w-[300px] h-[200px] sm:h-[300px] lg:h-[300px] mx-auto bg-gradient rounded-full overflow-hidden flex items-center justify-center">
                            <motion.img
                                src={linkedInProfileImageUrl}
                                alt="profile"
                                className="w-full h-full object-cover rounded-full"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                        </div>
                        <h2 className="text-gradient text-[20px] mt-[20px] mx-auto">Farhan Maulana Pangestu</h2>
                    </div>
                    <SkillComponents/>
                </div>
            </div>
        </div>
    )
}
