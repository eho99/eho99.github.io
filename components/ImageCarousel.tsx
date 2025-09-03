import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const visibleImagesCount = 3;

    // Automatic slide transition
    useEffect(() => {
        let slideInterval;
        // Check if there are enough images to form a carousel.
        // The carousel should not auto-slide if there are fewer images than visibleImagesCount.
        if (!isHovered && images.length > visibleImagesCount) {
            slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const newIndex = prevIndex + 1;
                    if (newIndex > images.length - visibleImagesCount) {
                        return 0;
                    }
                    return newIndex;
                });
            }, 5000);
        }
        return () => clearInterval(slideInterval);
    }, [isHovered, images.length, visibleImagesCount]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            if (newIndex < 0) {
                return images.length - visibleImagesCount;
            }
            return newIndex;
        });
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            if (newIndex > images.length - visibleImagesCount) {
                return 0;
            }
            return newIndex;
        });
    };

    return (
        <div
            className="flex justify-center items-center py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 min-h-screen"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-2xl transition-all duration-300">
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-4"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleImagesCount)}%)` }}
                >
                    {images.map((url, index) => (
                        <div key={index} className="flex-shrink-0 w-1/3">
                            <img
                                src={url}
                                alt={`Slide ${index + 1}`}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover rounded-xl"
                                loading="lazy"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = 'https://placehold.co/1200x600?text=Image+Not+Found';
                                }}
                            />
                        </div>
                    ))}
                </div>

                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft size={32} />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Next Slide"
                >
                    <ChevronRight size={32} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {Array.from({ length: Math.ceil(images.length / visibleImagesCount) }).map((_, pageIndex) => (
                        <button
                            key={pageIndex}
                            onClick={() => setCurrentIndex(pageIndex * visibleImagesCount)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex >= pageIndex * visibleImagesCount && currentIndex < (pageIndex + 1) * visibleImagesCount ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to page ${pageIndex + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
