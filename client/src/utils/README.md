# Intersection Observer Utility

Global utility for triggering slide animations when elements come into view.

## Usage

```jsx
import { setupSlideAnimationObserver } from '../utils/intersectionObserver';

const sectionRef = useRef(null);

useEffect(() => {
    const cleanup = setupSlideAnimationObserver(sectionRef, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    return cleanup;
}, []);
```

## Animation Classes
- `animate-slide-from-left`
- `animate-slide-from-right` 
- `animate-slide-from-top`
- `animate-slide-from-bottom`
- `animate-fade-in`

### Available Animation Classes

- `animate-slide-from-left` - Slides in from the left
- `animate-slide-from-right` - Slides in from the right (with 0.3s delay)
- `animate-slide-from-top` - Slides in from the top
- `animate-slide-from-bottom` - Slides in from the bottom (with 0.6s delay)
- `animate-fade-in` - Fades in (with 0.9s delay)

### Options

The `setupSlideAnimationObserver` function accepts an options object:

- `threshold` (number, default: 0.3) - How much of the element needs to be visible to trigger
- `rootMargin` (string, default: '0px 0px -100px 0px') - Margin around the root element

### Staggered Animations

For multiple elements with staggered animations, you can add custom delays:

```jsx
{items.map((item, index) => (
    <div 
        key={item.id} 
        className="animate-slide-from-bottom"
        style={{ animationDelay: `${index * 0.1}s` }}
    >
        {item.content}
    </div>
))}
```

## How It Works

1. The observer watches for when the referenced element comes into view
2. When triggered, it adds the `slide-animation-trigger` class to the element
3. This class enables the animations on child elements with animation classes
4. When the element goes out of view, it adds the `animate-reset` class to reset animations
5. The cleanup function properly removes the observer when the component unmounts 