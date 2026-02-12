
import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2
};

export default function TiltedCard({
    children,
    className = '',
    rotateAmplitude = 14,
    scaleOnHover = 1.05,
    style = {}
}) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);

    function handleMouse(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
    }

    function handleMouseLeave() {
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                perspective: 1000,
                ...style,
                rotateX,
                rotateY,
                scale,
                transformStyle: 'preserve-3d'
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
}
