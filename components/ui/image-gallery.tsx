"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { Grid, List, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: Array<{
    src: string
    alt?: string
    title?: string
    description?: string
  }>
  className?: string
  showCount?: boolean
  aspectRatio?: number
  defaultView?: "grid" | "list"
  allowViewToggle?: boolean
}

export function ImageGallery({
  images = [],
  className,
  showCount = true,
  aspectRatio = 16/9,
  defaultView = "grid",
  allowViewToggle = true
}: ImageGalleryProps) {
  const [view, setView] = React.useState<"grid" | "list">(defaultView)
  const [loadedImages, setLoadedImages] = React.useState<Set<number>>(new Set())

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index))
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    target.src = "https://placehold.co/1200x600?text=Image+Not+Found"
  }

  if (images.length === 0) {
    return (
      <Card className={cn("w-full", className)}>
        <CardContent className="p-8 text-center">
          <div className="text-muted-foreground">
            No images to display
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        {showCount && (
          <Badge variant="secondary" className="text-sm">
            {images.length} {images.length === 1 ? 'image' : 'images'}
          </Badge>
        )}
        {allowViewToggle && (
          <div className="flex items-center space-x-1">
            <Button
              variant={view === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setView("grid")}
              className="h-8 w-8 p-0"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setView("list")}
              className="h-8 w-8 p-0"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Gallery */}
      <div className={cn(
        view === "grid" 
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          : "space-y-4"
      )}>
        {images.map((image, index) => (
          <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative cursor-pointer">
                    <AspectRatio ratio={view === "list" ? 21/9 : aspectRatio}>
                      {!loadedImages.has(index) && (
                        <Skeleton className="absolute inset-0 w-full h-full z-10" />
                      )}
                      <img
                        src={image.src}
                        alt={image.alt || `Gallery image ${index + 1}`}
                        className={cn(
                          "w-full h-full object-cover transition-all duration-300",
                          "group-hover:scale-105",
                          loadedImages.has(index) ? "opacity-100" : "opacity-0"
                        )}
                        onLoad={() => handleImageLoad(index)}
                        onError={handleImageError}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </AspectRatio>
                    {(image.title || image.description) && view === "list" && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                        {image.title && (
                          <h3 className="font-semibold text-lg">{image.title}</h3>
                        )}
                        {image.description && (
                          <p className="text-sm opacity-90 mt-1">{image.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                    />
                    {(image.title || image.description) && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                        {image.title && (
                          <h3 className="font-semibold text-xl mb-2">{image.title}</h3>
                        )}
                        {image.description && (
                          <p className="text-sm opacity-90">{image.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
              {(image.title || image.description) && view === "grid" && (
                <div className="p-4">
                  {image.title && (
                    <h3 className="font-semibold truncate">{image.title}</h3>
                  )}
                  {image.description && (
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {image.description}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}