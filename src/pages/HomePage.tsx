import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { Building2, Users, Calendar, ArrowRight, Play } from 'lucide-react';
import siteData from '../content/data';

// Import luxury components
import HeroSection from '../components/ui/HeroSection';
import StatCounter from '../components/ui/StatCounter';
import LogoMarquee from '../components/ui/LogoMarquee';
import CardGrid from '../components/ui/CardGrid';
import Card from '../components/ui/Card';
import MapboxMap from '../components/ui/MapboxMap';
import Section from '../components/ui/Section';

const HomePage: React.FC = () => {
  // Apply SEO for home page
  useSEO('home');

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure animations work on initial load
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Get featured data
  const homeStats = siteData.stats.slice(0, 3); // Companies, Employees, Years
  const featuredPartners = siteData.partners.filter(p => p.featured);
  const featuredDivisions = siteData.divisions.filter(d => d.featured);
  const featuredNews = siteData.news.filter(n => n.featured);

  // Office markers for global presence map
  const officeMarkers = siteData.offices.map(office => ({
    id: office.id,
    coordinates: office.coordinates,
    title: office.name,
    description: `${office.city}, ${office.country} • ${office.employees} employees`,
    type: 'office' as const,
    color: office.type === 'headquarters' ? '#C9A227' : '#2563EB'
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero Section */}
      <HeroSection
        mediaUrl={siteData.media.homeHero.url}
        mediaType="video"
        poster={siteData.media.homeHero.poster}
        title="Tamimi Group|Building Excellence"
        subtitle="Since 1940"
        description="Leading Saudi Arabia's transformation with 30+ companies, 21,000+ employees, and 80+ years of unwavering commitment to excellence across diverse sectors."
        buttons={[
          {
            text: 'Explore Our Companies',
            variant: 'primary',
            icon: 'arrow',
            href: '/divisions'
          },
          {
            text: 'Watch Our Story',
            variant: 'secondary',
            icon: 'play',
            onClick: () => console.log('Open video modal')
          }
        ]}
        height="screen"
      />

      {/* Executive Metrics */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Driving Excellence
            <span className="block text-gold">Across the Kingdom</span>
          </motion.h2>
          <motion.p
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Our numbers tell the story of sustained growth, unwavering commitment,
            and the trust placed in us by partners across diverse industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeStats.map((stat) => {
            const IconComponent = stat.icon === 'Building2' ? Building2 : stat.icon === 'Users' ? Users : Calendar;
            return (
              <StatCounter
                key={stat.id}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                suffix={stat.suffix}
                icon={IconComponent}
                size="lg"
              />
            );
          })}
        </div>
      </Section>

      {/* Partners Marquee */}
      <Section background="default" padding="lg">
        <div className="text-center mb-12">
          <motion.h2
            className="font-heading font-bold text-3xl lg:text-4xl text-ivory mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            className="text-lg text-steel max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Partnering with the Kingdom's most prestigious organizations and global enterprises
          </motion.p>
        </div>

        <LogoMarquee
          logos={featuredPartners}
          speed="medium"
          direction="left"
          pauseOnHover={true}
        />
      </Section>

      {/* Divisions Snapshot */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Business Divisions
            <span className="block text-gold">Serving Every Sector</span>
          </motion.h2>
          <motion.p
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            From catering and facility management to construction and industrial services,
            our diverse portfolio delivers excellence across multiple industries.
          </motion.p>
        </div>

        <CardGrid columns={4} gap="lg" className="mb-16">
          {featuredDivisions.map((division) => (
            <Card
              key={division.id}
              title={division.name}
              description={division.shortDescription}
              href={`/divisions/${division.slug}`}
              variant="luxury"
              badge={`Est. ${division.established}`}
              badgeType="establishment"
              stats={[
                { label: 'Services', value: division.services.length.toString() },
                { label: 'Clients', value: division.clients.length.toString() }
              ]}
            />
          ))}
        </CardGrid>

        <div className="text-center">
          <motion.a
            href="/divisions"
            className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-ink px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>View All Divisions</span>
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </Section>

      {/* Global Presence */}
      <Section background="default" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Regional Presence
            <span className="block text-gold">Across the GCC</span>
          </motion.h2>
          <motion.p
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            From our headquarters in Riyadh to strategic locations across the Gulf,
            we're positioned to serve clients throughout the region.
          </motion.p>
        </div>

        <MapboxMap
          markers={officeMarkers}
          height="500px"
          center={[46.6753, 24.7136]}
          zoom={5}
          className="mb-16"
        />

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-gold mb-2 tabular-nums">6</div>
            <div className="text-ivory font-semibold mb-1">Offices</div>
            <div className="text-steel text-sm">Strategic locations</div>
          </div>
          <div>
            <div className="text-3xl font-black text-gold mb-2 tabular-nums">4</div>
            <div className="text-ivory font-semibold mb-1">Countries</div>
            <div className="text-steel text-sm">Regional coverage</div>
          </div>
          <div>
            <div className="text-3xl font-black text-gold mb-2 tabular-nums">21K+</div>
            <div className="text-ivory font-semibold mb-1">Employees</div>
            <div className="text-steel text-sm">Regional workforce</div>
          </div>
          <div>
            <div className="text-3xl font-black text-gold mb-2 tabular-nums">80+</div>
            <div className="text-ivory font-semibold mb-1">Years</div>
            <div className="text-steel text-sm">Regional experience</div>
          </div>
        </div>
      </Section>

      {/* Latest News */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Latest News
            <span className="block text-gold">& Insights</span>
          </motion.h2>
        </div>

        <CardGrid columns={3} gap="lg" className="mb-12">
          {featuredNews.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.excerpt}
              image={article.image}
              href={`/news/${article.id}`}
              variant="image"
              showModal={true}
              truncateTitle={true}
              truncateDescription={true}
              titleLimit={70}
              descriptionLimit={120}
              author={article.author}
              date={article.date}
              category={article.category}
              readTime={article.readTime?.toString()}
            >
              <div className="flex items-center justify-between text-sm text-steel mt-4 pt-4 border-t border-line">
                <span>{article.author}</span>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
            </Card>
          ))}
        </CardGrid>

        <div className="text-center">
          <motion.a
            href="/news"
            className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-hover text-ink px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>View All News</span>
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </Section>
    </motion.div>
  );
};

export default HomePage;