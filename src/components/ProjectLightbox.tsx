import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

interface ProjectLightboxProps {
  project: Project;
  onClose: () => void;
  projects: Project[];
  onNavigate: (id: number) => void;
}

const ProjectLightbox = ({
  project,
  onClose,
  projects,
  onNavigate,
}: ProjectLightboxProps) => {
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useEffect(() => {
    // Disable scrolling when lightbox is open
    document.body.style.overflow = "hidden";

    // Handle escape key press
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      // Re-enable scrolling when lightbox is closed
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-gray-900 rounded-lg overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-[#39FF14] hover:text-black transition-colors"
          >
            <X size={24} />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-square md:aspect-auto">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-[#39FF14] text-lg mb-6">{project.category}</p>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-gray-300 text-lg">{project.description}</p>
                <p className="text-gray-300 mt-4">
                  This project explores the boundaries of{" "}
                  {project.category.toLowerCase()} design, pushing conventional
                  limits to create visually striking compositions that challenge
                  the viewer's perception and expectations.
                </p>
              </div>

              <div className="mt-auto flex justify-between">
                <button
                  onClick={() => onNavigate(prevProject.id)}
                  className="flex items-center gap-2 hover:text-[#39FF14] transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => onNavigate(nextProject.id)}
                  className="flex items-center gap-2 hover:text-[#39FF14] transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectLightbox;
