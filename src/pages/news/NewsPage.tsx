import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../../hooks/useSEO';
import { Calendar, Filter, Download, ExternalLink, ArrowRight } from 'lucide-react';
import siteData from '../../content/data';

// Import luxury components
import HeroSection from '../../components/ui/HeroSection';
import CardGrid from '../../components/ui/CardGrid';
import Card from '../../components/ui/Card';
import Carousel from '../../components/ui/Carousel';
import Section from '../../components/ui/Section';

const NewsPage: React.FC = () => {
  // Apply SEO for news page
  useSEO('news');

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  // Filter news articles
  const filteredNews = siteData.news.filter(article => {
    if (selectedCategory && article.category !== selectedCategory) return false;
    if (selectedYear && new Date(article.date).getFullYear().toString() !== selectedYear) return false;
    return true;
  });

  const categories = Array.from(new Set(siteData.news.map(article => article.category)));
  const years = Array.from(new Set(siteData.news.map(article => new Date(article.date).getFullYear().toString()))).sort().reverse();

  const featuredNews = siteData.news.filter(article => article.featured);
  const investorNews = siteData.news.filter(article => article.category === 'investor');

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedYear('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hero Section */}
      <HeroSection
        mediaUrl="/media/videos/news-media.mp4"
        mediaType="video"
        poster="/media/images/news-media-poster.jpg"
        title="News & Insights|Stay Updated"
        subtitle="Latest Updates"
        description="Stay informed with the latest news, press releases, financial reports, and insights from Tamimi Group. Transparent communication with our stakeholders and communities."
        buttons={[
          {
            text: 'Latest Articles',
            variant: 'primary',
            icon: 'arrow',
            onClick: () => document.getElementById('news-grid')?.scrollIntoView({ behavior: 'smooth' })
          }
        ]}
        height="medium"
        textPosition="center"
      />

      {/* Featured News Carousel */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Featured Stories
            <span className="block text-gold">Latest Highlights</span>
          </motion.h2>
        </div>

        <Carousel
          autoPlay={true}
          autoPlayInterval={5000}
          showDots={true}
          showArrows={true}
          infinite={true}
          itemsPerView={1}
        >
          {featuredNews.map((article) => (
            <Card
              key={article.id}
              title={article.title}
              description={article.excerpt}
              image={article.image}
              href={`/news/${article.id}`}
              variant="image"
              className="mx-4"
              showModal={true}
              truncateTitle={true}
              truncateDescription={true}
              titleLimit={65}
              descriptionLimit={110}
              author={article.author}
              date={article.date}
              category={article.category}
              readTime={article.readTime?.toString()}
            >
              <div className="flex items-center justify-between text-sm text-steel mt-4 pt-4 border-t border-line">
                <span>{article.author}</span>
                <div className="flex items-center space-x-4">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </Card>
          ))}
        </Carousel>
      </Section>

      {/* News Grid with Filters */}
      <Section background="default" padding="xl" id="news-grid">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            All Articles
            <span className="block text-gold">Complete Archive</span>
          </motion.h2>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-surface-secondary border border-line rounded-lg text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 bg-surface-secondary border border-line rounded-lg text-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
            >
              <option value="">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            {(selectedCategory || selectedYear) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gold text-ink rounded-lg font-semibold hover:bg-gold-hover transition-colors duration-300"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-steel text-sm">
            {filteredNews.length} of {siteData.news.length} articles
          </div>
        </div>

        {/* News Grid */}
        <CardGrid columns={3} gap="lg" className="mb-16">
          <AnimatePresence>
            {filteredNews.map((article) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card
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
                    <div className="flex items-center space-x-2">
                      <Calendar size={12} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </CardGrid>

        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-steel text-lg mb-2">No articles found</div>
            <p className="text-steel/60 mb-6">Try adjusting your filter criteria</p>
            <button
              onClick={clearFilters}
              className="bg-gold hover:bg-gold-hover text-ink px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Show All Articles
            </button>
          </motion.div>
        )}
      </Section>

      {/* Investor Relations Section */}
      <Section background="secondary" padding="xl">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading font-bold text-4xl lg:text-5xl text-ivory mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Investor Relations
            <span className="block text-gold">Financial Transparency</span>
          </motion.h2>
          <motion.p
            className="text-xl text-steel max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Access our financial reports, investor presentations, and key performance
            metrics. We're committed to transparent communication with our stakeholders.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investorNews.map((report) => (
            <motion.div
              key={report.id}
              className="luxury-card p-6 group hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-ivory text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                    {report.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed mb-3">
                    {report.excerpt}
                  </p>
                </div>
                <Download className="text-gold" size={20} />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-steel">
                  <Calendar size={12} className="mr-1" />
                  {new Date(report.date).toLocaleDateString()}
                </div>
                <a
                  href={`/reports/${report.id}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-hover transition-colors duration-300 flex items-center space-x-1"
                >
                  <span>Download</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default NewsPage;