import { useState, useEffect } from 'react';

const Typewriter = ({ phrases, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];

        const handleTyping = () => {
            setDisplayedText((prev) => {
                if (isDeleting) {
                    return currentPhrase.substring(0, prev.length - 1);
                } else {
                    return currentPhrase.substring(0, prev.length + 1);
                }
            });
        };

        let timeout;

        if (!isDeleting && displayedText === currentPhrase) {
            // Finished typing the phrase, pause before deleting
            timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && displayedText === '') {
            // Finished deleting, move to the next phrase
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
            // Typing or deleting characters
            timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span>
            {displayedText}
            <span style={{ borderRight: '2px solid currentColor', marginLeft: '2px', animation: 'blink 1s step-end infinite' }}></span>
            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </span>
    );
};

export default Typewriter;
