import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FaBehance, FaPinterest } from "react-icons/fa";

interface HeroSectionProps {
  name?: string;
  title?: string;
  subheadline?: string;
  description?: string;
  imageUrl?: string;
}

const HeroSection = ({
  name = "Hi, I'm Prithvi Dubey",
  title = "A Creative Graphic Designer Exploring Visual Chaos & Harmony",
  subheadline = "Known online as @prithvi_graphix, I blend modern design trends with raw artistic energy — turning ideas into visuals that provoke, inspire, and break the mold.",
  description = "From surreal posters to brutalist layouts, abstract compositions to minimal branding — my work is a playground of bold experiments and visual storytelling.",
  imageUrl = "https://i.postimg.cc/4ZjVgfR4/testt.png",
}: HeroSectionProps) => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            <span className="block">{name}</span>
            <span className="text-[#39FF14] mt-2 block text-2xl md:text-3xl -tracking-normal font-sans">
              {title}
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-lg">
            {subheadline}
          </p>
          <p className="text-sm md:text-base text-gray-400 max-w-lg">
            {description}
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 pt-4">
            <motion.a
              href="https://instagram.com/prithvi_graphix"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#E1306C" }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              href="https://www.behance.net/ryugakishatu1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#1769FF" }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaBehance size={24} />
            </motion.a>
            <motion.a
              href="https://in.pinterest.com/prithvidubey045/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#E60023" }}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaPinterest size={24} />
            </motion.a>
          </div>

          <div className="pt-4">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#39FF14] text-black px-8 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 transition-all inline-block"
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full h-auto relative overflow-hidden rounded-lg">
            <div className="absolute inset-0 border-2 border-[#39FF14] rounded-lg transform rotate-3 z-0"></div>
            <img
              src={imageUrl}
              alt="Prithvi Dubey"
              className="w-full h-full object-cover rounded-lg z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#39FF14] rounded-lg z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
