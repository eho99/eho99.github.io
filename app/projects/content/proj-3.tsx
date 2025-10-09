import Image from 'next/image'

export default function Project3() {
  return (
    <div className="space-y-8">
      <div className="my-8">
        <h1 className="text-3xl font-bold">Image Warping and Mosaicing</h1>
        <p className="text-gray-600">Part 1 of Project 3: (Auto)stiching Photo Mosaics</p>
      </div>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Base input images</h2>
        <p className="mb-6 text-gray-700">
          {/* Add your description here */}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Add your base input images here */}
          {/* Example: 
          <div className="flex flex-col items-center">
            <Image src="/proj3/results/your-image.jpg" alt="Description" width={600} height={400} className="rounded border" />
            <p className="text-sm mt-2 text-center">Image caption</p>
          </div>
          */}

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/IMG_3617.jpg"
              alt="Stadium Left"
              width={600}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Stadium Left</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/IMG_3619.jpg"
              alt="Stadium Right"
              width={600}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Stadium Right</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/IMG_3673_downscaled.jpg"
              alt="Doe Library Left"
              width={600}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Doe Library Left</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/IMG_3674_downscaled.jpg"
              alt="Doe Library Right"
              width={600}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Doe Library Right</p>
          </div>

        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Intermediate steps</h2>
        <div className="mb-6 text-gray-700">
          <h3 className="text-lg font-semibold mb-3">A: Handling Intermediate Parts</h3>
          <p className="mb-4">
            To prepare the images for the final blend, we first handled several crucial intermediate steps.
          </p>
          
          <div className="space-y-3">
            <div>
              <strong>Canvas & Alignment:</strong> We began by calculating the total dimensions required for the final mosaic. We then warped the source image using its homography and placed the reference image onto two separate, blank canvases of this final size. This ensured both images were perfectly aligned within the same coordinate frame.
            </div>
            
            <div>
              <strong>Blend Mask Generation:</strong> We created a smooth blend mask by warping a solid white image. This automatically generated a feathered mask that defined the precise transition zone between the two images, which is essential for the blending algorithm.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {/* Add your intermediate step images here */}
          {/* Example: 
          <div className="flex flex-col items-center">
            <Image src="/proj3/results/your-image.jpg" alt="Description" width={600} height={400} className="rounded border" />
            <p className="text-sm mt-2 text-center">Image caption</p>
          </div>
          */}

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/stadium_correspondences.png"
              alt="Stadium Correspondences"
              width={600}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Stadium Correspondences</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/doe_correspondences.png"
              alt="Doe Library Correspondences"
              width={600}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Doe Library Correspondences</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/stadium_warp.png"
              alt="Stadium Warped"
              width={600}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Stadium Warped</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/doe_warp.png"
              alt="Doe Library Warped"
              width={600}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Doe Library Warped</p>
          </div>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Final result</h2>
        <p className="mb-6 text-gray-700">
          {/* Add your description here */}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Add your final result images here */}
          {/* Example: 
          <div className="flex flex-col items-center">
            <Image src="/proj3/results/your-image.jpg" alt="Description" width={800} height={500} className="rounded border" />
            <p className="text-sm mt-2 text-center">Image caption</p>
          </div>
          */}

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/a4_stadium_panorama.png"
              alt="Stadium Panoramic"
              width={800}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Stadium Panoramic</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/a4_doe_sign.png"
              alt="Doe Library Mosaic"
              width={800}
              height={400}
              className="rounded border"
            />
            <p className="text-sm mt-2 text-center">Doe Library Mosaic</p>
          </div>
        </div>
      </section>
    </div>
  )
}
