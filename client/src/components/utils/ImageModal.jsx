import React, { useState } from "react";

const ImageModal = ({ src, alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Thumbnail */}
            <img
                src={src}
                alt={alt}
                className="cursor-pointer rounded shadow hover:opacity-80 transition"
                onClick={() => setIsOpen(true)}
            />

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-primary/70 flex items-center justify-center z-50 animate-fadeIn"
                    onClick={() => setIsOpen(false)} // Click outside closes modal
                >
                    <div
                        className="relative max-w-[90%] max-h-[90%] animate-zoomIn"
                        onClick={(e) => e.stopPropagation()} // Prevent closing on image click
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-[90vh] rounded shadow-lg"
                        />
                        {/* Close button */}
                        <button
                            className="absolute top-2 right-2 bg-accent text-primary rounded-full px-2 shadow hover:bg-primary cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageModal;
