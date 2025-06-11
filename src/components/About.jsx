import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services, experience } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Logo from "../assets/myphoto.jpg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// const About = () => {
//   return (
//     <div className="relative">
//       <motion.div>
//         <h2 className={styles.sectionHeadText}>About Me</h2>
//       </motion.div>
//       <div className="flex justify-center items-start mb-10 mt-10 p-10">
//         <div>
//           <img
//             src={Logo}
//             className="w-full sm:w-[300px] h-auto rounded-full"
//             alt="Logo"
//           />
//         </div>
//       </div>
//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className="mt-4 text-secondary text-center text-xl  leading-[30px]"
//       >
//         I am an undergraduate student currently in my second year, studying Computer Engineering at the University of Peradeniya. 
//         I have a strong interest in computer architecture and enjoy solving complex problems. 
//         As a motivated and enthusiastic learner, I am passionate about expanding my knowledge and skills in the field of computing. 
//         I am also a friendly and flexible team player with good interpersonal and communication skills, which help me collaborate effectively with others.
//       </motion.p>

//       <div className="mt-20 justify-center flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//       <div className="mt-24">
//         <motion.div>
//           <h2 className={styles.sectionHeadText}>Experience</h2>
//         </motion.div>
//       </div>

//       <div className="mt-20 justify-center flex flex-wrap gap-10">
//         {experience.map((experience, index) => (
//           <ExperienceCard key={experience.name} index={index} {...experience} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <Tilt className="xs:w-[250px] w-full">
//       <motion.div
//         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//       >
//         <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//           <img
//             src={icon}
//             alt="web-development"
//             className="w-16 h-16 object-contain"
//           />

//           <h3 className="text-white text-[20px] font-bold text-center">
//             {title}
//           </h3>
//         </div>
//       </motion.div>
//     </Tilt>
//   );
// };

// const ExperienceCard = ({
//   name,
//   icon,
//   title,
//   working_type,
//   bg,
//   year,
//   details,
//   techs,
//   projects,
// }) => {
//   return (
//     <div className="bg-tertiary false w-full  text-white justify-center  rounded-3xl min-h-[400px] gap-4 p-5  ">
//       <div className="flex md:justify-between max-[500px]:gap-4 max-[500px]:flex-col">
//         <span className="bg-gradient-to-r from-indigo-300 flex  items-center py-1 md:px-3 px-3 rounded-full md:w-64 min-w-[192px]">
//           <img
//             src={icon}
//             alt="sezenta"
//             className="md:w-12 md:h-12 h-16 w-16   "
//           />
//           <span className="flex ml-4 flex-col">
//             <p className="text-white whitespace-nowrap font-bold ml-2 text-3xl">
//               {name}
//             </p>
//             <p className="text-white ml-2">{working_type}</p>
//           </span>
//         </span>
//         <span className="bg-[#F7E976] text-black  h-12 px-5 font-bold rounded-full md:min-w-[250px] min-w-[288px]  flex md:py-4 items-center max-[500px]:text-sm gap-2">
//           <FaRegCalendarAlt /> {year}
//         </span>
//       </div>
//       <div className="flex py-8 text-3xl">{title}</div>
//       <div className="flex flex-col gap-4 p-4 ">
//         {details.map((data, index) => {
//           return (
//             <div key={index} className="flex flex-row gap-3">
//               <MdKeyboardDoubleArrowRight className="text-3xl" /> {data}
//             </div>
//           );
//         })}
//       </div>
//       {/* <div className=" flex flex-wrap gap-3 mb-5 justify-start">
//         Projects :
//         {projects.map((data, index) => {
//           return <div className=" p-5 text-white rounded-2xl">{data}</div>;
//         })}
//       </div> */}
//       <div className=" flex flex-wrap gap-3 justify-center">
//         {techs.map((data, index) => {
//           return (
//             <div className="bg-[#F7E976] p-5 text-black rounded-2xl">
//               {data}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };


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

const CourseCard = ({ index, category, courses }) => {
  return (
    <Tilt className="xs:w-[400px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[350px] flex flex-col">
          <h3 className="text-white text-[22px] font-bold text-center mb-6">
            {category}
          </h3>
          <div className="flex-1 overflow-y-auto max-h-[280px]">
            {courses.map((course, courseIndex) => (
              <div key={course.id} className="mb-3 p-2 bg-black-200 rounded-lg">
                <div className="text-white text-sm font-semibold">
                  {course.id}
                </div>
                <div className="text-secondary text-sm">
                  {course.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const ExperienceCard = ({ index, courseCategory }) => {
  // If it's a course category, render course card
  if (courseCategory) {
    return (
      <div className="bg-tertiary w-full text-white justify-center rounded-3xl min-h-[400px] gap-4 p-5">
        <div className="flex md:justify-between max-[500px]:gap-4 max-[500px]:flex-col">
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
        <div className="flex py-8 text-2xl font-semibold">Course List</div>
        <div className="flex flex-col gap-3 p-4 max-h-[300px] overflow-y-auto">
          {courseCategory.courses.map((course, courseIndex) => {
            return (
              <div key={courseIndex} className="flex flex-row gap-3 items-center bg-black-200 p-3 rounded-lg">
                <MdKeyboardDoubleArrowRight className="text-2xl text-[#F7E976]" />
                <div className="flex flex-col">
                  <span className="text-[#F7E976] font-semibold text-sm">{course.id}</span>
                  <span className="text-white">{course.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Original experience card logic (kept for backward compatibility)
  return null;
};

export default SectionWrapper(About, "about");
