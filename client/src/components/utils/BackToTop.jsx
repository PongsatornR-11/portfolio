import React, { useState, useEffect } from 'react';
import { ArrowBigUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-12 w-full z-50 flex justify-center items-center">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="border cursor-pointer bg-primary border-secondary text-secondary transition-all hover:bg-secondary hover:text-primary hover:-translate-y-1 font-bold py-1 px-4 rounded-lg"
        >
          <ArrowBigUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
