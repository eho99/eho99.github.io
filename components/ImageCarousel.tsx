import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images?: string[];
  className?: string;
  showCount?: boolean;
  aspectRatio?: number;
}

const ImageCarousel = ({ 
  images = [], 
  className, 
  showCount = true,
  aspectRatio = 16/9
}: ImageCarouselProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://placehold.co/1200x600?text=Image+Not+Found';
  };

  if (images.length === 0) {
    return (
      <Card className={cn("w-full", className)}>
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            No images to display
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {showCount && images.length > 0 && (
        <div className="mb-4 flex items-center justify-between">
          <Badge variant="secondary" className="text-sm">
            {images.length} {images.length === 1 ? 'image' : 'images'}
          </Badge>
        </div>
      )}
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((url, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer group">
                        <AspectRatio ratio={aspectRatio}>
                          {!loadedImages.has(index) && (
                            <Skeleton className="w-full h-full absolute inset-0 z-10" />
                          )}
                          <img
                            src={url}
                            alt={`Gallery image ${index + 1}`}
                            className={cn(
                              "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                              loadedImages.has(index) ? "opacity-100" : "opacity-0"
                            )}
                            loading="lazy"
                            onLoad={() => handleImageLoad(index)}
                            onError={handleImageError}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </AspectRatio>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                      <div className="relative">
                        <img
                          src={url}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
