"use client"

import * as React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    aspectRatio?: number
    showSkeleton?: boolean
    fallbackSrc?: string
    containerClassName?: string
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
    ({
        className,
        src,
        alt,
        aspectRatio,
        showSkeleton = true,
        fallbackSrc = "https://placehold.co/1200x600?text=Image+Not+Found",
        containerClassName,
        onLoad,
        onError,
        ...props
    }, ref) => {
        const [isLoaded, setIsLoaded] = React.useState(false)
        const [hasError, setHasError] = React.useState(false)

        const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            setIsLoaded(true)
            onLoad?.(e)
        }

        const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            setHasError(true)
            const target = e.target as HTMLImageElement
            if (target.src !== fallbackSrc) {
                target.src = fallbackSrc
            }
            onError?.(e)
        }

        const imageElement = (
            <>
                {showSkeleton && !isLoaded && !hasError && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img
                    ref={ref}
                    src={src}
                    alt={alt}
                    className={cn(
                        "object-cover transition-opacity duration-300",
                        isLoaded ? "opacity-100" : "opacity-0",
                        className
                    )}
                    onLoad={handleLoad}
                    onError={handleError}
                    {...props}
                />
            </>
        )

        if (aspectRatio) {
            return (
                <div className={cn("relative overflow-hidden", containerClassName)}>
                    <AspectRatio ratio={aspectRatio}>
                        {imageElement}
                    </AspectRatio>
                </div>
            )
        }

        return (
            <div className={cn("relative", containerClassName)}>
                {imageElement}
            </div>
        )
    }
)

Image.displayName = "Image"

export { Image }