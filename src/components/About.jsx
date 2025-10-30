import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCertificate, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Logo from "../assets/myphoto.jpg";

// export default SectionWrapper(About, "about");
const About = () => {
  return (
    <div className="relative">
      <motion.div>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <div className="flex justify-center items-start mb-10 mt-10 p-10">
        <div>
          <img
            src={Logo}
            className="w-full sm:w-[300px] h-auto rounded-full"
            alt="Logo"
          />
        </div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-center text-xl  leading-[30px]"
      >
        I am an undergraduate student currently in my second year, studying Computer Engineering at the University of Peradeniya. 
        I have a strong interest in computer architecture and enjoy solving complex problems. 
        As a motivated and enthusiastic learner, I am passionate about expanding my knowledge and skills in the field of computing. 
        I am also a friendly and flexible team player with good interpersonal and communication skills, which help me collaborate effectively with others.
      </motion.p>
      
      {/* Stats Cards Section */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10"
      >
        {/* CGPA Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.6, 1)}
          className="stat-card bg-tertiary p-6 rounded-2xl shadow-lg w-full max-w-[280px]"
        >
          <div className="stat-icon flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white" />
            </div>
          </div>
          <div className="stat-info text-center">
            <h3 className="text-white text-4xl font-bold mb-2">3.93</h3>
            <p className="text-secondary uppercase text-sm tracking-wider">CGPA</p>
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.7, 1)}
          className="stat-card bg-tertiary p-6 rounded-2xl shadow-lg w-full max-w-[280px]"
        >
          <div className="stat-icon flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full">
              <FontAwesomeIcon icon={faCertificate} className="text-white" />
            </div>
          </div>
          <div className="stat-info text-center">
            <h3 className="text-white text-4xl font-bold mb-2">5+</h3>
            <p className="text-secondary uppercase text-sm tracking-wider">Certifications</p>
          </div>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          variants={fadeIn("right", "spring", 0.8, 1)}
          className="stat-card bg-tertiary p-6 rounded-2xl shadow-lg w-full max-w-[280px]"
        >
          <div className="stat-icon flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gradient-to-r from-green-400 to-teal-500 rounded-full">
              <FontAwesomeIcon icon={faLaptopCode} className="text-white" />
            </div>
          </div>
          <div className="stat-info text-center">
            <h3 className="text-white text-4xl font-bold mb-2">3+</h3>
            <p className="text-secondary uppercase text-sm tracking-wider">Major Projects</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
