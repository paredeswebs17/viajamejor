/**
 * Utility function to share content
 * Uses Web Share API if available, falls back to Twitter sharing
 */
export const shareContent = (title: string, text: string) => {
  if (navigator.share) {
    navigator.share({
      title,
      text,
      url: window.location.href,
    })
    .catch((error) => console.log('Error sharing', error));
  } else {
    // Fallback to Twitter sharing
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`, 
      '_blank'
    );
  }
};