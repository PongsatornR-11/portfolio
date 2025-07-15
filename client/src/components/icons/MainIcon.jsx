import React from 'react';
import Button from '../utils/Button';

const MainIcon = () => {
    const monogramPathData = "M20,45 L20,15 L32.5,15 C38.125,15 42.5,19.375 42.5,25 C42.5,30.625 38.125,35 32.5,35 L20,35 M32.5,25 L45,45";
    const hexagonPoints = "54,30 42,52.39 18,52.39 6,30 18,7.61 42,7.61";

    return (
        <Button className={'rounded-md p-1'}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points={hexagonPoints} stroke="var(--color-secondary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d={monogramPathData} stroke="var(--color-secondary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Button>
    );
};

export default MainIcon;