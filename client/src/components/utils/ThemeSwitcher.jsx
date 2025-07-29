import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState(() => {
        // Initialize theme from localStorage or default to 'dark'
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const htmlElement = document.documentElement;
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            console.log(theme)
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            if (prevTheme === 'dark') return 'light';
            if (prevTheme === 'light') return 'dark-theme-1';
            if (prevTheme === 'dark-theme-1') return 'light-theme-1';
            return 'dark'; // Cycle back to default dark
        });
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-24 right-4 p-3 rounded-full bg-neutral text-accent shadow-lg z-50 hover:scale-110 transition-transform duration-400"
            aria-label="Toggle theme"
        >
            {theme === ('light'|| 'light-theme-1') ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
};

export default ThemeSwitcher;
