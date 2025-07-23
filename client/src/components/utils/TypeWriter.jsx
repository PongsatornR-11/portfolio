import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, delay, initialDelay = 0 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStartTyping(true);
        }, initialDelay);

        return () => clearTimeout(startTimeout);
    }, [initialDelay]);

    useEffect(() => {
        if (startTyping && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [startTyping, currentIndex, delay, text]);

    return <span>{currentText}<span className="typing-cursor"></span></span>;
};

export default TypeWriter;
