import { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('INITIALIZING SYSTEM...');

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // 0.5s delay after completion before unmounting
                    return 100;
                }
                // Randomize progress increment for a more "data loading" feel
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 200);

        // Text glitch effect sequence
        const textSequence = [
            { t: 'INITIALIZING SYSTEM...', d: 0 },
            { t: 'LOADING ASSETS...', d: 800 },
            { t: 'ESTABLISHING CONNECTION...', d: 1600 },
            { t: 'WELCOME TO BLANCOS HQ', d: 2400 }
        ];

        textSequence.forEach(({ t, d }) => {
            setTimeout(() => setText(t), d);
        });

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="loading-screen">
            <div className="loading-content">
                <div className="loading-text glitch" data-text={text}>{text}</div>
                <div className="loading-bar-container">
                    <div
                        className="loading-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="loading-percentage">{Math.round(progress)}%</div>
            </div>
            <div className="scanline"></div>
        </div>
    );
};

export default LoadingScreen;
