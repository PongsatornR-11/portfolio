import React from 'react';

const AnimatedMainIcon = () => {
    const monogramPathData = "M20,45 L20,15 L32.5,15 C38.125,15 42.5,19.375 42.5,25 C42.5,30.625 38.125,35 32.5,35 L20,35 M32.5,25 L45,45";
    const monogramPathLength = 150;
    const hexagonPoints = "54,30 42,52.39 18,52.39 6,30 18,7.61 42,7.61";
    const hexagonPathLength = 144; // Perimeter of the hexagon

    return (
        <svg width="120" height="120" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-svg">
            <style>
                {`
                    @keyframes draw {
                        to {
                            stroke-dashoffset: 0;
                        }
                    }
                    @keyframes shrinkFadeOut {
                        from {
                            transform: scale(1);
                            opacity: 1;
                        }
                        to {
                            transform: scale(0.5);
                            opacity: 0;
                        }
                    }
                    .drawing-path-monogram {
                        stroke-dasharray: ${monogramPathLength};
                        stroke-dashoffset: ${monogramPathLength};
                        animation: draw 2s ease-in-out forwards;
                    }
                    .drawing-path-hexagon {
                        stroke-dasharray: ${hexagonPathLength};
                        stroke-dashoffset: ${hexagonPathLength};
                        animation: draw 2s ease-in-out forwards;
                    }
                    .animated-svg {
                        animation: shrinkFadeOut 1s ease-in-out 2s forwards;
                    }
                `}
            </style>
            <polygon className="drawing-path-hexagon" points={hexagonPoints} stroke="var(--color-secondary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path className="drawing-path-monogram" d={monogramPathData} stroke="var(--color-secondary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default AnimatedMainIcon;