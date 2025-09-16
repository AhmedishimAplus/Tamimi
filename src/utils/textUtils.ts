/**
 * Text utility functions for consistent formatting across the application
 */

/**
 * Truncates text to a specified character limit and adds ellipsis if exceeded
 * @param text - The text to truncate
 * @param limit - Maximum number of characters
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, limit: number): string => {
  if (!text) return '';
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + '...';
};

/**
 * Truncates text by word boundary to avoid cutting words in half
 * @param text - The text to truncate
 * @param limit - Maximum number of characters
 * @returns Truncated text with ellipsis at word boundary
 */
export const truncateTextByWords = (text: string, limit: number): string => {
  if (!text) return '';
  if (text.length <= limit) return text;
  
  const truncated = text.slice(0, limit);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  // If there's no space found or it's too close to the beginning, just use character truncation
  if (lastSpaceIndex === -1 || lastSpaceIndex < limit * 0.8) {
    return truncated.trim() + '...';
  }
  
  return truncated.slice(0, lastSpaceIndex).trim() + '...';
};

/**
 * Standard character limits for different content types
 */
export const TEXT_LIMITS = {
  // Card content limits
  CARD_TITLE: 60,           // ~2 lines for titles
  CARD_DESCRIPTION: 120,    // ~3-4 lines for descriptions
  CARD_EXCERPT: 80,         // ~2-3 lines for excerpts
  
  // News specific limits
  NEWS_TITLE: 70,           // Slightly longer for news titles
  NEWS_EXCERPT: 140,        // More space for news descriptions
  
  // Division specific limits
  DIVISION_TITLE: 50,       // Shorter for division cards
  DIVISION_DESCRIPTION: 100, // Consistent division descriptions
} as const;

/**
 * Checks if text was truncated
 * @param originalText - The original text
 * @param limit - The character limit used
 * @returns True if the text was truncated
 */
export const isTruncated = (originalText: string, limit: number): boolean => {
  return originalText.length > limit;
};