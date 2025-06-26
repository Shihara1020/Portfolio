import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { universityCourses } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const UniversityCourses = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="mt-24">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-white`}>University Courses</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#aaa6c3] text-center text-lg max-w-3xl mx-auto leading-[30px]"
      >
        Here are the subjects I have learned during my undergraduate studies
      </motion.p>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mt-8 mb-12">
        {universityCourses.map((category, index) => (
          <motion.button
            key={category.category}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === index
                ? 'bg-[#915eff] text-white'
                : 'bg-[#1d1836] text-[#aaa6c3] hover:bg-[#2a2349]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.category}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {universityCourses.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeTab === index ? 1 : 0,
              y: activeTab === index ? 0 : 20,
              display: activeTab === index ? 'block' : 'none'
            }}
            transition={{ duration: 0.3 }}
            className="bg-[#1d1836] backdrop-blur-sm rounded-3xl p-8 border border-[#915eff]/20"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-xl bg-[#915eff]/10 text-[#915eff] rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-white text-lg font-bold">{category.category}</h3>
              </div>
              <div className="bg-[#915eff]/10 text-[#915eff] px-3 py-1 rounded-full text-xs font-medium">
                {category.courses.length} Courses
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {category.courses.map((course, courseIndex) => (
                <motion.div
                  key={courseIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: courseIndex * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="bg-[#915eff]/5 hover:bg-[#915eff]/10 border border-[#915eff]/10 
                            rounded-lg p-3 transition-all cursor-pointer"
                >
                  <div className="text-[#915eff] text-xs font-mono">{course.id}</div>
                  <div className="text-white text-sm font-medium mt-1 line-clamp-2">
                    {course.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(UniversityCourses, "universityCourses");