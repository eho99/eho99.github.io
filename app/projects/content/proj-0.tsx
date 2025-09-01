import ImageCompare from '../../../components/ImageCompare'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Project0() {
    return (
        <>
            {/* Side-by-Side Comparison */}
            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">Side-by-Side Comparison</h2>
                <p className="mb-4">
                    Here is the main visual comparison for the project, showing the effect of moving from telephoto to wide-angle lenses.
                </p>
                <ImageCompare
                    leftSrc="/static/85mm.jpg"
                    rightSrc="/static/12mm.jpg"
                    leftCaption="85mm @ 200cm"
                    rightCaption="12mm @ 30cm"
                />
            </div>

            {/* Part 2: Architectural Perspective Compression */}
            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">Part 2: Architectural Perspective Compression</h2>
                <p className="mb-4">The following photos were taken on an iPhone 16 on default settings.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj0/berkeley_4th_street_1x_zoom(1).jpg"
                            alt="24mm focal length @ 25 feet away from subject shot"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">24mm @ 25 feet</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj0/berkeley_4th_street_2x_zoom.jpg"
                            alt="48mm focal length @ 35 feet away from subject shot"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">48mm @ 35 feet</p>
                    </div>
                </div>
            </div>

            {/* Dolly Zoom Recreation */}
            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">Dolly Zoom Recreation</h2>
                <p className="mb-4">
                    Recreating the dolly zoom effect using static images to show the perspective change.
                </p>

                {/* Placeholder for GIF or Carousel */}
                <div className="text-center">
                    <Image
                        src="/proj0/dolly_zoom.gif"
                        alt="Dolly Zoom GIF"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                    <p>Dolly Zoom GIF</p>
                    {/* Add GIF or Carousel component here */}
                    <Carousel>
                        <CarouselContent className="-ml-4">
                            <CarouselItem className="basis-1/2 pl-4">
                                <Image
                                    src="/proj0/dolly_zoom_frame1.jpg"
                                    alt="Dolly Zoom Frame 1"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 pl-4">
                                <Image
                                    src="/proj0/dolly_zoom_frame2.jpg"
                                    alt="Dolly Zoom Frame 2"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-1/2 pl-4">
                                <Image
                                    src="/proj0/dolly_zoom_frame3.jpg"
                                    alt="Dolly Zoom Frame 3"
                                    width={600}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </>
    )
}