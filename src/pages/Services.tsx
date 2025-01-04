import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Globe,
  TrendingUp,
  MessageSquare,
  Cloud,
  Shield,
  Settings
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business.',
      features: ['Social Media Marketing', 'Content Marketing', 'Email Campaigns', 'PPC Advertising']
    },
    {
      icon: TrendingUp,
      title: 'SEO Services',
      description: 'Improve your online visibility and search engine rankings.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: MessageSquare,
      title: 'IT Consulting',
      description: 'Expert technology consulting services for your business needs.',
      features: ['Technology Assessment', 'Digital Strategy', 'Process Optimization', 'IT Infrastructure']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      features: ['Cloud Migration', 'AWS Services', 'Azure Solutions', 'Cloud Security']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Security Training', 'Compliance']
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: '24/7 technical support and maintenance services.',
      features: ['24/7 Support', 'Performance Monitoring', 'Regular Updates', 'Backup Solutions']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Services Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;