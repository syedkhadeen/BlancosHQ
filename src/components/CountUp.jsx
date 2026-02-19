import { useState, useEffect } from 'react';

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime = null;
        let animationFrameId;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // Calculate percentage complete (0 to 1)
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutExpo)
            // 1 - Math.pow(2, -10 * percentage)
            const easeValue = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            const currentCount = Math.floor(easeValue * end);
            setCount(currentCount);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [end, duration]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
};

export default CountUp;
