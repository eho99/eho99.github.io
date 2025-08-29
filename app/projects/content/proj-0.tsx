import ImageCompare from '../../../components/ImageCompare'
import Image from 'next/image'

// This is the custom body for your 'Focal Length Comparison' project
export default function Project0() {
    return (
        <>
            {/* You can add custom sections */}
            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">Side-by-Side Comparison</h2>
                <p className="mb-4">Here is the main visual comparison for the project, showing the effect of moving from telephoto to wide-angle lenses.</p>
                <ImageCompare
                    leftSrc="/static/85mm.jpg"
                    rightSrc="/static/12mm.jpg"
                    leftCaption="85mm @ 200cm"
                    rightCaption="12mm @ 30cm"
                />
            </div>

            {/* And add more sections with different components */}
            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">Individual Shots</h2>
                <p className="mb-4">Below are all the individual images taken during the experiment.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Image src="/static/85mm.jpg" alt="85mm shot" width={400} height={400} className="rounded-lg" />
                    <Image src="/static/35mm.jpg" alt="35mm shot" width={400} height={400} className="rounded-lg" />
                    <Image src="/static/12mm.jpg" alt="12mm shot" width={400} height={400} className="rounded-lg" />
                </div>
            </div>
        </>
    )
}