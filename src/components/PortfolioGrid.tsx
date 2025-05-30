import { motion } from "framer-motion";

interface Project {
  id: number;
  imageUrl: string;
}

interface PortfolioGridProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1748367033226-34e6e6e761bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1748366709426-ea650f55688e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1748366027021-69e21c8cc038?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1748366765792-9f3cdb610249?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1748367033192-22527216e982?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1748366428980-ea692cb6e56d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1748365823901-638baa822816?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1748365302403-c911d7fcf5af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1748365002119-505b0b922e86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1748364638421-9227304d9d0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fHw%3D",
  },
];

const PortfolioGrid = ({ projects = defaultProjects }: PortfolioGridProps) => {
  return (
    <section className="bg-black text-white py-20 px-4" id="portfolio">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-[#39FF14] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio showcasing a minimalist aesthetic with bold
            concepts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-lg bg-gray-900"
            >
              <div className="overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={`Project ${project.id}`}
                  className="w-full h-auto object-cover transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
