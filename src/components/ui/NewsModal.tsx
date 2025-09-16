import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Tag, ExternalLink } from 'lucide-react';

interface NewsModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    image?: string;
    author?: string;
    date?: string;
    category?: string;
    readTime?: string;
    href?: string;
}

const NewsModal: React.FC<NewsModalProps> = ({
    isOpen,
    onClose,
    title,
    description,
    image,
    author,
    date,
    category,
    readTime,
    href
}) => {
    const formatDate = (dateString?: string) => {
        if (!dateString) return '';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleLinkClick = () => {
        if (href) {
            window.open(href, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleBackdropClick}
                    >
                        {/* Modal Content */}
                        <motion.div
                            className="bg-jet rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="relative">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface-elevated/80 backdrop-blur-sm flex items-center justify-center text-steel hover:text-gold hover:bg-surface-elevated transition-all duration-300"
                                >
                                    <X size={20} />
                                </button>

                                {/* Image */}
                                {image && (
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-8 overflow-y-auto max-h-[60vh]">
                                {/* Category Badge */}
                                {category && (
                                    <div className="inline-flex items-center mb-4">
                                        <div className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                            <Tag size={14} className="mr-1" />
                                            {category}
                                        </div>
                                    </div>
                                )}

                                {/* Title */}
                                <h2 className="font-heading font-bold text-3xl text-ivory mb-6 leading-tight">
                                    {title}
                                </h2>

                                {/* Meta Information */}
                                <div className="flex flex-wrap items-center gap-4 mb-6 text-steel text-sm">
                                    {author && (
                                        <div className="flex items-center">
                                            <User size={14} className="mr-1" />
                                            {author}
                                        </div>
                                    )}

                                    {date && (
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-1" />
                                            {formatDate(date)}
                                        </div>
                                    )}

                                    {readTime && (
                                        <div className="text-steel/60">
                                            {readTime} min read
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="text-steel leading-relaxed text-lg mb-8">
                                    {description}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 pt-6 border-t border-line">
                                    {href && (
                                        <button
                                            onClick={handleLinkClick}
                                            className="flex-1 bg-gold hover:bg-gold-hover text-ink px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                                        >
                                            <span>Read Full Article</span>
                                            <ExternalLink size={16} className="ml-2" />
                                        </button>
                                    )}

                                    <button
                                        onClick={onClose}
                                        className="px-6 py-3 rounded-xl border border-line text-steel hover:text-ivory hover:border-gold/50 transition-all duration-300"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default NewsModal;