import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';
import pd from '../assets/images/pd.jpg';
import ps from '../assets/images/ps.jpg';
import vr from '../assets/images/vr.jpg';
import ss from '../assets/images/ss.jpg';
import bp from '../assets/images/bp.jpg';
import sp from '../assets/images/sp.jpg';
import ns from '../assets/images/ns.jpg';


const About = () => {
  const team = [
    {
      name: 'Priyansh',
      role: 'CEO & Founder',
      image: ps
    },
    {
      name: 'Pranav',
      role: 'Technical Lead',
      image: pd
    },
    {
      name: 'Vicky',
      role: 'Lead Developer',
      image: vr
    },
    {
      name: 'Nirbhay',
      role: 'Marketing Director',
      image: ns
    },
    {
      name: 'Bozo Shukla',
      role: 'UX Designer',
      image: sp
    },
    {
      name: 'Sushant',
      role: 'Project Manager',
      image: ss
    },
    {
      name: 'BP',
      role: 'SEO Specialist',
      image: bp
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To empower businesses through innovative digital solutions and exceptional service.'
              },
              {
                icon: Award,
                title: 'Our Vision',
                description: 'To be the leading force in digital transformation and technological innovation.'
              },
              {
                icon: Heart,
                title: 'Our Values',
                description: 'Innovation, integrity, excellence, and customer satisfaction drive everything we do.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our talented team of professionals who make the magic happen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;