import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      description: 'A full-featured e-commerce platform with inventory management and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      description: 'Property listing and management platform with virtual tour capabilities.',
      technologies: ['Next.js', 'PostgreSQL', 'AWS', 'Three.js']
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800',
      description: 'Comprehensive fitness tracking application with social features.',
      technologies: ['Flutter', 'Firebase', 'GraphQL', 'TensorFlow']
    },
    {
      title: 'Supply Chain Management',
      category: 'Enterprise Solution',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      description: 'End-to-end supply chain management system with real-time tracking.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Social Media Dashboard',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      description: 'Analytics dashboard for social media management and reporting.',
      technologies: ['Vue.js', 'Python', 'Django', 'D3.js']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Projects Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Showcasing our best work and innovative solutions
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    View Project <ExternalLink className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;