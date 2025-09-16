import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { truncateTextByWords, TEXT_LIMITS, isTruncated } from '../../utils/textUtils';
import NewsModal from './NewsModal';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  iconColor?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'luxury' | 'glass' | 'image' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  badge?: string;
  badgeType?: 'establishment' | 'category';
  stats?: Array<{ label: string; value: string }>;
  // New props for modal functionality
  author?: string;
  date?: string;
  category?: string;
  readTime?: string;
  showModal?: boolean;
  truncateTitle?: boolean;
  truncateDescription?: boolean;
  titleLimit?: number;
  descriptionLimit?: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  icon: Icon,
  iconColor = '#C9A227',
  href,
  onClick,
  className = '',
  variant = 'default',
  size = 'md',
  children,
  badge,
  badgeType = 'establishment',
  stats,
  author,
  date,
  category,
  readTime,
  showModal = false,
  truncateTitle = false,
  truncateDescription = false,
  titleLimit = TEXT_LIMITS.CARD_TITLE,
  descriptionLimit = TEXT_LIMITS.CARD_DESCRIPTION
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Determine if we should show truncated text
  const displayTitle = truncateTitle ? truncateTextByWords(title, titleLimit) : title;
  const displayDescription = truncateDescription ? truncateTextByWords(description, descriptionLimit) : description;
  
  // Check if content was truncated
  const titleTruncated = truncateTitle && isTruncated(title, titleLimit);
  const descriptionTruncated = truncateDescription && isTruncated(description, descriptionLimit);
  const hasModal = showModal && (titleTruncated || descriptionTruncated);

  const handleCardClick = () => {
    if (hasModal) {
      setIsModalOpen(true);
    } else if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };
  const variantClasses = {
    default: 'bg-jet border border-line hover:border-gold/30',
    luxury: 'luxury-card',
    glass: 'glass backdrop-blur-xl',
    image: 'bg-jet border border-line overflow-hidden',
    minimal: 'bg-transparent border border-line/30 hover:border-gold/50'
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const Component = href && !hasModal ? motion.a : motion.div;
  const componentProps = href && !hasModal
    ? { href }
    : { onClick: handleCardClick };
    
  const cursorClass = hasModal || onClick ? 'cursor-pointer' : '';

  return (
    <>
      <Component
        className={`${variantClasses[variant]} ${sizeClasses[size]} rounded-2xl transition-all duration-300 group relative overflow-hidden h-full flex flex-col ${cursorClass} ${className}`}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'center center' }}
        {...componentProps}
      >
      {/* Badge */}
      {badge && (
        <motion.div
          className={`badge-fixed font-medium text-center ${badgeType === 'establishment'
            ? 'text-black px-1 py-0.5 rounded-md text-xs'
            : 'text-gold bg-gold/15 px-1 py-0.5 rounded-md text-xs'
            }`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {badge}
        </motion.div>
      )}

      {/* Content Container - Full Height Flex */}
      <div className="flex flex-col h-full">
        {/* Image */}
        {image && (
          <div className="mb-6 -mx-6 -mt-6 aspect-video overflow-hidden rounded-t-2xl flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Icon */}
        {Icon && !image && (
          <div className="mb-6 flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-surface-elevated flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Icon size={32} style={{ color: iconColor }} />
            </div>
          </div>
        )}

        {/* Main Content - Grows to fill space */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-heading font-bold text-ivory text-xl lg:text-2xl mb-4 group-hover:text-gold transition-colors duration-300">
            {displayTitle}
          </h3>

          <p className="text-steel leading-relaxed mb-6 text-base lg:text-lg">
            {displayDescription}
          </p>

          {/* Stats */}
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-line flex-shrink-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gold font-bold text-lg">{stat.value}</div>
                  <div className="text-steel text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Custom Children Content */}
          {children && (
            <div className="flex-shrink-0">
              {children}
            </div>
          )}

          {/* Learn More Link - Always at Bottom */}
          {(href || onClick || hasModal) && (
            <motion.div
              className="flex items-center text-gold mt-auto pt-4 border-t border-line/50 flex-shrink-0"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium mr-2 group-hover:mr-3 transition-all duration-300">
                {hasModal ? 'Read more' : 'Learn more'}
              </span>
              <ArrowRight
                size={16}
                className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Component>

    {/* Modal */}
    {hasModal && (
      <NewsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        image={image}
        author={author}
        date={date}
        category={category}
        readTime={readTime}
        href={href}
      />
    )}
  </>
  );
};

export default Card;