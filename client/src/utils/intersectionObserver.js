/**
 * Global intersection observer utility for triggering slide animations
 * @param {HTMLElement} element - The element to observe
 * @param {Object} options - Observer options (optional)
 * @param {number} options.threshold - Trigger threshold (default: 0.3)
 * @param {string} options.rootMargin - Root margin (default: '0px 0px -100px 0px')
 * @returns {IntersectionObserver} The observer instance
 */
export const createSlideAnimationObserver = (element, options = {}) => {
    const {
        threshold = 0.3,
        rootMargin = '0px 0px -100px 0px'
    } = options;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('animate-reset');
                    entry.target.classList.add('slide-animation-trigger');
                } else {
                    entry.target.classList.add('animate-reset');
                    entry.target.classList.remove('slide-animation-trigger');
                }
            });
        },
        {
            threshold,
            rootMargin
        }
    );

    if (element) {
        observer.observe(element);
    }

    return observer;
};

/**
 * Utility function to set up slide animation observer in useEffect
 * @param {React.RefObject} ref - React ref object
 * @param {Object} options - Observer options (optional)
 * @returns {Function} Cleanup function to unobserve the element
 */
export const setupSlideAnimationObserver = (ref, options = {}) => {
    const observer = createSlideAnimationObserver(ref.current, options);
    
    // Return cleanup function
    return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
    };
}; 