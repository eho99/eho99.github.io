import Image from 'next/image'
import fs from 'fs';
import path from 'path';

export default function Project0() {
    const task3Folder = path.join(process.cwd(), 'public/proj0/task3');
    const task3Images = fs.readdirSync(task3Folder).filter(file => file.endsWith('.jpg'));

    return (
        <>
            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">Part 1: Selfie: The Wrong Way vs. The Right Way</h2>
                <p className="mb-4">
                    The two photos below were shot on an iPhone 16 and show the distortion between a subject at a close distance when framed the same but taken with different zoom / focal lengths.

                    <br></br>

                    This difference in appearence is likely the case due to the field of view of the camera and the way it captures subjects that are close. When the subject is close, it naturally pronounces the center of the image and gives a thined effect on the edge of the subject because it is towards the end of the field of vision, while the further photo allows a more flattened perspective.

                    <br></br>
                    <i>
                        Thank you to my friend for allowing me to use his photo in my project.
                    </i>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj0/task1/IMG_3407.jpg"
                            alt="1x zoom"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">1x zoom</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj0/task1/IMG_3408.jpg"
                            alt="2x zoom"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">2x zoom</p>
                    </div>
                </div>
            </div>

            {/* Part 2: Architectural Perspective Compression */}
            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">Part 2: Architectural Perspective Compression</h2>
                <p className="mb-4">The following photos were taken on an iPhone 16 on default settings.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj0/task2/berkeley_4th_street_1x_zoom(1).jpg"
                            alt="24mm focal length @ 25 feet away from subject shot"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">24mm @ 25 feet</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj0/task2/berkeley_4th_street_2x_zoom.jpg"
                            alt="48mm focal length @ 35 feet away from subject shot"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">48mm @ 35 feet</p>
                    </div>
                </div>
            </div>

            <div className="my-8">
                <h2 className="text-xl font-bold mb-2">Part 3: The Dolly Zoom</h2>
                <p className="mb-4">
                    The following images were taken on an iPhone 16 ranging from 1x zoom to 2.2x zoom (optical). The following colab notebook merged the images into a gif.
                    <br></br>
                    <a href="https://colab.research.google.com/drive/1j2J_ZrFima8-Eg1998K9W-H-RdmnTd-9?usp=sharing" className="text-blue-500 hover:underline">Colab Notebook</a>
                </p>


                <div className="flex flex-col items-center">
                    <Image
                        src="/proj0/task3/giphy.gif"
                        alt="Dolly Zoom GIF"
                        width={600}
                        height={400}
                        className="rounded-lg"
                        unoptimized={true}
                    />
                    <p className="text-sm mt-2 text-center">Dolly Zoom GIF</p>
                </div>
            </div>
        </>
    );
}