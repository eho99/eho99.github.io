import Image from 'next/image'

export default function Project1() {
    return (
        <>
            {/* Introduction */}
            <div className="my-8">
                <h1 className="text-2xl font-bold mb-4">Primer</h1>
                <p className="mb-4">
                    The images in the Prokudin-Gorskii collection represent an early attempt to start color photography by taking the "same" image of a subject through three colored filters: red, green, and blue.
                    <br /> <br />
                    To combine them into a single color image, the images of each color channel need to be aligned properly. This project uses single-scale and multi-scale alignment algorithms by computing the normalized cross-correlation (NCC) at various displacements between the images to align the red and green channel images to the blue channel.
                </p>
            </div>

            {/* Single-Scale Alignment */}
            <div className="my-8">
                <h1 className="text-2xl font-bold mb-4">Single-Scale Alignment</h1>

                <h2 className="text-xl font-bold mb-2">Methodology</h2>
                <p className="mb-4">
                    For smaller images (jpgs), a single pass approach on the base scale images is sufficient to achieve a good alignment. By trying all combinations of <code>[-dx, -dy]</code> displacements in the range <code>[-15, 15]</code>, the optimal alignment can be found by maximizing the normalized cross-correlation (NCC) between the channels. Using that displacement, we can use <code>np.roll()</code> to do an x-y shift and align the channels.
                </p>

                <h2 className="text-xl font-bold mb-2">Results</h2>
                <p className="mb-4">Results from single-scale alignment on smaller images:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/small_color_no_grad/cathedral_colored.jpg"
                            alt="Cathedral colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Cathedral (see "Bells and Whistles" for better alignment)</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/small_color_no_grad/monastery_colored.jpg"
                            alt="Monastery colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Monastery</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/small_color_no_grad/tobolsk_colored.jpg"
                            alt="Tobolsk colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Tobolsk</p>
                    </div>
                </div>
            </div>

            {/* Multi-scale Alignment */}
            <div className="my-8">
                <h1 className="text-2xl font-bold mb-4">Multi-scale Alignment</h1>

                <h2 className="text-xl font-bold mb-2">Methodology</h2>
                <p className="mb-4">
                    For the larger <code>.tif</code> images, a scaled pyramid approach was used to speed up and reduce the search space.
                    <br /> <br />
                    When profiling the speed of <code>np.roll()</code> and <code>ncc()</code> operations, we are bottlenecked by number of displacements we need to check for each image. With the increasing scale, it's reasonable to check under 9 displacements at the highest resolution images. Thus, starting from the down-scaled image, we can use a large displacement search <code>[-20, 20]</code> and successively refine the displacement search space as we move up the pyramid to the original resolution image. At each level, we need to multiply the displacement found by a scale factor to handle the translation into the upsized image.

                    <br /> <br />
                    Emperically, a 6 level pyramid sped up the alignment of <code>emir.tif</code> from ~209 seconds to ~24 seconds, a speed up of around 88.5%.
                </p>

                <h2 className="text-xl font-bold mb-2">Results</h2>
                <p className="mb-4">Results from multi-scale alignment on larger images:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/church_colored.jpg"
                            alt="Church colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Church</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/emir_colored.jpg"
                            alt="Emir colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Emir (see "Bells and Whistles" for better alignment)</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/harvesters_colored.jpg"
                            alt="Harvesters colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Harvesters</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/icon_colored.jpg"
                            alt="Icon colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Icon</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/italil_colored.jpg"
                            alt="Italil colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Italil</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/lastochikino_colored.jpg"
                            alt="Lastochikino colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Lastochikino</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/lugano_colored.jpg"
                            alt="Lugano colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Lugano</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/melons_colored.jpg"
                            alt="Melons colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Melons</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/self_portrait_colored.jpg"
                            alt="Self Portrait colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Self Portrait</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/siren_colored.jpg"
                            alt="Siren colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Siren</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/large_colored/three_generations_colored.jpg"
                            alt="Three Generations colored result"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Three Generations</p>
                    </div>
                </div>

                <h1 className="text-2xl font-bold mb-4">Problems and Challenges</h1>
                <h2 className="text-xl font-bold mb-2">Initial Alignment</h2>
                <p className="mb-4">
                    When initially aligning the images (<code>cathedral.jpg</code>), I had difficulty lining up the image because I wasn't properly aligning the images due to artifacting from the borders. At first I attempted to crop the borders before aligning the content through a simple percentage calculation, but further refinement by only considering the the central portion of the image led to much better alignment. The refinement is further improved with the gradient approach (see Bells and Whistles)
                </p>

                <h2 className="text-xl font-bold mb-2">Challenges with Multi-Scale Alignment</h2>
                <p className="mb-4">
                    I had a lot of challenges getting the search space / window of the multi-scale alignment dialed, ultimately setting the search window at each level to be <code>start_window // level</code> for all levels after 1.
                    <br /> <br />
                    Following this, I also had initially implemented the scaling offset multiplier as a static 2x multiplier. This static multiplier caused errors depending on the divisibility of the shapes of the images, creating rounding errors between levels. Thus, I updated this to be a dynamic multiplier based on the shape of the previous image and the shape of the current image to be more accurate.
                </p>

                <h2 className="text-xl font-bold mb-2">Emir of Bukhara</h2>
                <p className="mb-4">
                    The photo of the Emir of Bukhara is misaligned with the default multi-scale method due to the brightness values not being the same. Thus, we can see that the red channel is clearly mis-aligned, something that can be rectified through the gradient approach.
                </p>

                <h1 className="text-2xl font-bold mb-4">Bells and Whistles</h1>
                <h2 className="text-xl font-bold mb-2">Gradients</h2>
                <p className="mb-4">
                    To improve alignment on select images (emir.tif and cathedral.jpg) as well as overall performance, we can align using the gradients of the images instead of the pixel brightness values. The gradient computes the derivative across the image which will allow effects differently scaled color brightness values to be nullified since the NCC score will be taken on the "direction" or change between brightness pixel values. We can see the direct impact of this on the <code>cathedral.jpg</code> and <code>emir.tif</code> source images.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/grad/cathedral_colored_grad.jpg"
                            alt="Cathedral colored result with gradients"
                            width={600}
                            height={600}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Cathedral (with gradients)</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/grad/emir_colored_grad.jpg"
                            alt="Emir colored result with gradients"
                            width={600}
                            height={600}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Emir (with gradients)</p>
                    </div>
                </div>

                {/* Putting It All Together - Custom Images */}
                <h1 className="text-2xl font-bold mb-4">Putting It All Together: Custom Images</h1>
                <p className="mb-4">
                    Looking at the impacts of the improvements between alignment methods, we can clearly see the progression on these custom images.
                </p>

                <h2 className="text-xl font-bold mb-2">Single-Scale (No Gradients)</h2>
                <p className="mb-4">Basic single-scale alignment using normalized cross-correlation on pixel values:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_no_grad/camel_colored.jpg"
                            alt="Camel - Single-scale no gradients"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Camel</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_no_grad/golodnaya_colored.jpg"
                            alt="Golodnaya - Single-scale no gradients"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Golodnaya</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_no_grad/mosaic_colored.jpg"
                            alt="Mosaic - Single-scale no gradients"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Mosaic</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_no_grad/sheep_colored.jpg"
                            alt="Sheep - Single-scale no gradients"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Sheep</p>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-2">Gradient-Based Alignment</h2>
                <p className="mb-4">Improved alignment using gradients to handle brightness variations between channels:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_grad/camel_colored.jpg"
                            alt="Camel - Gradient-based alignment"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Camel</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_grad/golodnaya_colored.jpg"
                            alt="Golodnaya - Gradient-based alignment"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Golodnaya</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_grad/mosaic_colored.jpg"
                            alt="Mosaic - Gradient-based alignment"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Mosaic</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_grad/sheep_colored.jpg"
                            alt="Sheep - Gradient-based alignment"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Sheep</p>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-2">Multi-Scale Pyramid with Gradients</h2>
                <p className="mb-4">Best results combining multi-scale pyramid (2 level) approach with gradient-based alignment:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_pyramid_2/camel_colored.jpg"
                            alt="Camel - Multi-scale pyramid with gradients"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Camel</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_pyramid_2/golodnaya_colored.jpg"
                            alt="Golodnaya - Multi-scale pyramid with gradients"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Golodnaya</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_pyramid_2/mosaic_colored.jpg"
                            alt="Mosaic - Multi-scale pyramid with gradients"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Mosaic</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image
                            src="/proj1/custom_image_pyramid_2/sheep_colored.jpg"
                            alt="Sheep - Multi-scale pyramid with gradients"
                            width={300}
                            height={300}
                            className="rounded-lg"
                        />
                        <p className="text-sm mt-2 text-center">Sheep</p>
                    </div>
                </div>
            </div>
        </>
    );
}
