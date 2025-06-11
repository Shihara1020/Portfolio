import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import {  achievements ,universityCourses } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Logo from "../assets/myphoto.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AchievementCard = ({ index, achievement }) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-[1px] rounded-[20px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#1d1836] rounded-[20px] py-8 px-6 min-h-[350px] flex flex-col justify-between'
      >
        <div>
          <div className="w-16 h-16 flex items-center justify-center text-4xl bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 mx-auto">
            {achievement.icon}
          </div>
          <h3 className='text-white text-[18px] font-bold text-center leading-tight mb-4'>
            {achievement.title}
          </h3>
          <div className="text-center mb-4">
            <span className="bg-[#F7E976] text-black px-3 py-1 rounded-full text-sm font-semibold">
              {achievement.year}
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold ml-2">
              {achievement.category}
            </span>
          </div>
        </div>
        <div className="text-[#aaa6c3] text-[14px] leading-relaxed text-center">
          {achievement.description}
        </div>
      </div>
    </motion.div>
  </Tilt>
);


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
      
       {/* Achievements Section */}
      <div className="mt-16">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Recognition</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
        >
          Recognition and accomplishments during my academic journey
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.title} index={index} achievement={achievement} />
        ))}
      </div>

       

      
      {/* University Courses Section */}
      <div className="mt-24">
        <motion.div>
          <h2 className={styles.sectionHeadText}>University Courses</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-center text-lg leading-[30px]"
        >
          Here are the subjects I have learned during my undergraduate studies at the University of Peradeniya
        </motion.p>
      </div>

      <div className="mt-20 justify-center flex flex-wrap gap-10">
        {universityCourses.map((courseCategory, index) => (
          <ExperienceCard key={courseCategory.category} index={index} courseCategory={courseCategory} />
        ))}
      </div>
    </div>
  );
};

const ExperienceCard = ({ index, courseCategory }) => {
  if (courseCategory) {
    return (
      <div className="bg-tertiary w-full text-white justify-center rounded-3xl min-h-[400px] gap-4 p-8">
        <div className="flex md:justify-between max-[500px]:gap-4 max-[500px]:flex-col mb-6">
          <span className="bg-gradient-to-r from-indigo-300 flex items-center py-1 md:px-3 px-3 rounded-full md:w-64 min-w-[192px]">
            <div className="md:w-12 md:h-12 h-16 w-16 flex items-center justify-center text-3xl bg-white rounded-full">
              {courseCategory.icon}
            </div>
            <span className="flex ml-4 flex-col">
              <p className="text-white whitespace-nowrap font-bold ml-2 text-2xl">
                {courseCategory.category}
              </p>
              <p className="text-white ml-2">Academic Courses</p>
            </span>
          </span>
          <span className="bg-[#F7E976] text-black h-12 px-5 font-bold rounded-full md:min-w-[250px] min-w-[288px] flex md:py-4 items-center max-[500px]:text-sm gap-2">
            📖 {courseCategory.courses.length} Courses
          </span>
        </div>
        
        {/* Tag-style course display */}
        <div className="flex flex-wrap gap-4 justify-center">
          {courseCategory.courses.map((course, courseIndex) => {
            return (
              <motion.div
                key={courseIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: courseIndex * 0.1 }}
                className="bg-[#F7E976] text-black px-6 py-3 rounded-2xl font-semibold text-center hover:bg-yellow-300 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="text-sm font-bold text-gray-800">{course.id}</div>
                <div className="text-base font-semibold">{course.name}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default SectionWrapper(About, "about");
