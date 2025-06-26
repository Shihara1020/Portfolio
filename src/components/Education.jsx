import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const EducationCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "12px",
        border: "1px solid rgba(145, 94, 255, 0.2)",
        boxShadow: "0 5px 15px -5px rgba(145, 94, 255, 0.3)"
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={experience.year}
      dateClassName="text-white font-medium"
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 0 4px rgba(145, 94, 255, 0.3)"
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.institute}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-white text-xl font-bold">{experience.name}</h3>
        <p className="text-secondary text-lg font-medium mt-1">
          {experience.institute}
        </p>
        <p className="text-white-100 text-sm mt-4 leading-relaxed">
          {experience.description}
        </p>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <section className="relative">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Education
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My academic journey and qualifications
      </motion.p>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(145, 94, 255, 0.3)">
          {education.map((experience, index) => (
            <EducationCard 
              key={`education-${index}`} 
              experience={experience} 
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary to-transparent opacity-10 pointer-events-none" />
    </section>
  );
};

export default SectionWrapper(Education, "education");