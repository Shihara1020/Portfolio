import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
const Achievements = () => {
  return (
    <div className="mt-16">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-white`}>Achievements</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
      >
        Recognition and accomplishments during my academic journey
      </motion.p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="relative bg-[#1d1836] p-6 rounded-2xl border border-[#915eff]/20 
                      transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      hover:shadow-[0_0_30px_8px_rgba(145,94,255,0.25)]
                      hover:border-[#915eff]/80
                      group overflow-hidden"
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.4 }
            }}
          >
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(145,94,255,0.1)_0%,_transparent_70%)] 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none 
                          border-[1.5px] border-transparent
                          group-hover:border-[#915eff] group-hover:animate-[pulse_2s_infinite]" />
            
            <div className="relative flex items-start gap-4 z-10">
              {/* Icon with enhanced hover */}
              <motion.div 
                className="text-[#915eff] text-2xl mt-1"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {achievement.icon}
              </motion.div>
              
              <div className="space-y-2">
                <h3 className="text-white text-xl font-semibold group-hover:text-[#c9b2ff] transition-colors">
                  {achievement.title}
                </h3>
                
                <div className="flex gap-2 mt-2">
                  <span className="text-[#915eff] text-sm group-hover:text-[#b388ff] transition-colors">
                    {achievement.year}
                  </span>
                  <span className="text-white/50 text-sm">•</span>
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors">
                    {achievement.category}
                  </span>
                </div>
                
                <motion.p 
                  className="text-[#aaa6c3] mt-3 text-sm leading-relaxed
                          group-hover:text-[#d1c4e9] transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {achievement.description}
                </motion.p>
              </div>
            </div>
            
            {/* Subtle shine effect on hover */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.03)_0%,_transparent_50%)] 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements,"achievements");