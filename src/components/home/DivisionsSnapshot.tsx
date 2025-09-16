import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed, Settings, Building2, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const DivisionsSnapshot: React.FC = () => {
  const featuredDivisions = [
    {
      id: 'catering',
      title: 'Catering Services',
      description: 'Premium catering solutions serving 50,000+ meals daily across corporate and institutional clients.',
      icon: UtensilsCrossed,
      color: '#C9A227',
      href: '/divisions/catering-services',
      stats: '50K+ daily meals'
    },
    {
      id: 'facility',
      title: 'Facility Management',
      description: 'Comprehensive facility solutions managing 500+ properties with 99.2% uptime achievement.',
      icon: Settings,
      color: '#2563EB',
      href: '/divisions/facility-management',
      stats: '500+ facilities'
    },
    {
      id: 'lodging',
      title: 'Board & Lodging',
      description: 'Quality accommodation services managing 5,000+ residential units with 96% guest satisfaction.',
      icon: Building2,
      color: '#059669',
      href: '/divisions/board-lodging',
      stats: '5K+ units managed'
    },
    {
      id: 'contracting',
      title: 'Contracting & Construction',
      description: 'Professional construction services with 1,000+ completed projects and 95% on-time delivery.',
      icon: HardHat,
      color: '#DC2626',
      href: '/divisions/contracting-construction',
      stats: '1K+ projects completed'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <Section background="secondary" padding="xl" id="divisions">
      <div className="text-center mb-16">
        <motion.h2 
          className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Business Divisions
          <span className="block text-gold">Serving Every Sector</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          From catering and facility management to construction and industrial services, 
          our diverse portfolio delivers excellence across multiple industries.
        </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featuredDivisions.map((division) => (
          <motion.div key={division.id} variants={itemVariants}>
            <Card
              title={division.title}
              description={division.description}
              icon={division.icon}
              iconColor={division.color}
              href={division.href}
              variant="luxury"
              className="h-full group"
              truncateTitle={true}
              truncateDescription={true}
              titleLimit={50}
              descriptionLimit={100}
            >
              {/* Stats Badge */}
              <div className="mt-4 pt-4 border-t border-line">
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold text-sm">
                    {division.stats}
                  </span>
                  <ArrowRight 
                    size={16} 
                    className="text-gold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-line max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-2xl lg:text-3xl text-ivory mb-4">
            Discover Our Complete Portfolio
          </h3>
          <p className="text-lg text-steel mb-8 max-w-2xl mx-auto">
            Explore all our business divisions and discover how we're driving 
            innovation across diverse sectors throughout the Kingdom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              href="/divisions"
            >
              View All Divisions
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              href="/contact"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default DivisionsSnapshot;