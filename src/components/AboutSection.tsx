import { motion } from "framer-motion";

interface AboutSectionProps {
  imageUrl?: string;
  name?: string;
  title?: string;
  bio?: string;
  stats?: { label: string; value: string }[];
}

const AboutSection = ({
  imageUrl = "https://i.postimg.cc/4ZjVgfR4/testt.png",
  name = "Prithvi Dubey",
  title = "Creative Graphic Designer",
  bio = "I’m Prithvi Dubey, a passionate and purpose-driven graphic designer also known as @prithvi_graphix",
  stats = [],
}: AboutSectionProps) => {
  const interests = [
    "Design",
    "Music",
    "Drawing",
    "PC building",
    "Coding",
    "Animation",
  ];

  const designStyles = [
    "Surrealism",
    "Brutalism",
    "Abstract Design",
    "Bento Grid",
    "Poster Art",
    "Collage",
    "Experimental Typography",
    "Visual Disruption",
    "Minimalism",
    "Emotion-Driven Design",
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-4" id="about">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#39FF14] mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-[#39FF14] rounded-lg -z-10"></div>

            {/* Signature Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-0 right-0 bg-black/80 backdrop-blur-sm p-4 rounded-tl-lg border-l border-t border-[#39FF14] max-w-[280px] z-20"
            >
              <p className="text-white text-sm italic">
                "Good design is seen. Great design is felt."
              </p>
              <p className="text-[#39FF14] text-xs mt-1 text-right">
                — Prithvi Dubey
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">{name}</h3>
            <p className="text-[#39FF14] text-xl">{title}</p>

            <div className="space-y-4 text-gray-300">
              <p>{bio}</p>
              <p>
                I specialize in creating visual chaos that makes sense —
                blending styles like surrealism, brutalism, bento grids,
                abstract design, collage, and experimental typography to bring
                stories, brands, and ideas to life. For me, design isn't just
                about looking good. It's about creating visual moments that
                spark curiosity, emotion, and inspiration. Every project I take
                on is a new playground — a chance to disrupt, dream, and dive
                deeper. Whether it's an eye-grabbing poster, a dreamlike visual
                concept, or a raw brutalist campaign, I bring bold ideas and
                sharp execution to every pixel I touch.
              </p>
            </div>

            {/* Design Styles Keywords */}
            <div className="mt-6">
              <h4 className="text-xl font-bold text-[#6366f1] mb-4 flex items-center">
                SIGNATURE STYLES <span className="ml-2">✦</span>
              </h4>
              <div className="flex flex-wrap gap-3">
                {designStyles.map((style, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-600 rounded-full px-4 py-2 bg-black/40 backdrop-blur-sm"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(57, 255, 20, 0.2)",
                      borderColor: "#39FF14",
                      transition: { duration: 0.2 },
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    <motion.span
                      whileHover={{
                        textShadow: "0 0 8px #39FF14",
                      }}
                    >
                      {style}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#6366f1] mb-6 flex items-center">
            TECHNICAL SKILLS <span className="ml-2">✦</span>
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="bg-black rounded-xl p-4 w-16 h-16 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Ai</span>
            </div>
            <div className="bg-black rounded-xl p-4 w-16 h-16 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Ps</span>
            </div>
            <div className="bg-black rounded-xl p-4 w-16 h-16 flex items-center justify-center">
              <span className="text-white text-2xl">C</span>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#6366f1] mb-6 flex items-center">
            EXPERIENCE <span className="ml-2">✦</span>
          </h3>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div>
              <p className="text-lg">Freelancer</p>
            </div>
            <div>
              <p className="font-bold">September 2023 - Present</p>
            </div>
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#6366f1] mb-6 flex items-center">
            LANGUAGES <span className="ml-2">✦</span>
          </h3>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div>
              <p className="text-lg">English</p>
            </div>
            <div>
              <p className="font-bold">Native language</p>
            </div>
            <div>
              <p className="text-lg">Hindi</p>
            </div>
            <div>
              <p className="font-bold">Native language</p>
            </div>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-[#6366f1] mb-6 flex items-center">
            INTERESTS <span className="ml-2">✦</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="border border-gray-600 rounded-full px-4 py-2"
              >
                {interest}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
