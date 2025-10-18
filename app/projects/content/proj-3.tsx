import Image from 'next/image'

export default function Project3() {
  return (
    <div className="space-y-8">
      {/* Part A Section */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Part A: Manual Feature Detection and Mosaicing</h2>
        
        <div className="space-y-8">
          <section className="my-8">
            <h3 className="text-xl font-semibold mb-4">A.1: Shoot and digitize pictures (20 pts)</h3>
        <p className="mb-6 text-gray-700">
          {/* Add your description here */}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/IMG_3617.jpg"
              alt="Stadium Left"
              width={1200}
              height={900}
              className="w-full max-w-2xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Stadium Left</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/IMG_3619.jpg"
              alt="Stadium Right"
              width={1200}
              height={900}
              className="w-full max-w-2xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Stadium Right</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/IMG_3673_downscaled.jpg"
              alt="Doe Library Left"
              width={1200}
              height={900}
              className="w-full max-w-2xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Doe Library Left</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/IMG_3674_downscaled.jpg"
              alt="Doe Library Right"
              width={1200}
              height={900}
              className="w-full max-w-2xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Doe Library Right</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/mc7_l.png"
              alt="Minecraft Top"
              width={1200}
              height={900}
              className="w-full max-w-2xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Minecraft Top</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/base/mc7_r.png"
              alt="Minecraft Bottom"
              width={1200}
              height={900}
              className="w-full max-w-2xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Minecraft Bottom</p>
          </div>
        </div>
          </section>

          <section className="my-8">
            <h3 className="text-xl font-semibold mb-4">A.2: Recover homographies (20 pts)</h3>
        <div className="mb-6 text-gray-700">
          <p className="mb-4">
            The homography matrix is computed by solving the system of equations <code>A · h = 0</code> using SVD, where A is the coefficient matrix and h is the flattened homography matrix.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">System of Equations (A matrix):</h4>
            <pre className="text-sm overflow-x-auto">
{`[[   -1228.    -1613.       -1.        0.        0.        0.   453132.   595197.      369.]
 [       0.        0.        0.    -1228.    -1613.       -1.  1985676.  2608221.     1617.]
 [   -4336.    -1643.       -1.        0.        0.        0. 15548896.  5891798.     3586.]
 [       0.        0.        0.    -4336.    -1643.       -1.  7353856.  2786528.     1696.]
 [   -4963.    -2139.       -1.        0.        0.        0. 20616302.  8885406.     4154.]
 [       0.        0.        0.    -4963.    -2139.       -1. 10749858.  4633074.     2166.]
 [   -1600.    -1890.       -1.        0.        0.        0.  1284800.  1517670.      803.]
 [       0.        0.        0.    -1600.    -1890.       -1.  3070400.  3626910.     1919.]]`}
            </pre>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Recovered Homography Matrix (H):</h4>
            <pre className="text-sm overflow-x-auto">
{`[[    1.2528     0.0101 -1167.1543]
 [    0.0941     1.1306  -240.5061]
 [    0.        -0.         1.    ]]`}
            </pre>
          </div>
        </div>
          </section>

          <section className="my-8">
            <h3 className="text-xl font-semibold mb-4">A.3: Warp the images (20 pts)</h3>
            <p className="mb-6 text-gray-700">
              Produce at least two examples of rectified images. The warping process transforms images using the computed homography matrices.
            </p>
        <div className="mb-6 text-gray-700">
          <div className="space-y-3">
            <div>
              <strong>Canvas & Alignment:</strong> The process begins by calculating the total dimensions required for the final mosaic. The source image is warped using its homography and the reference image is placed onto two separate, blank canvases of this final size. This ensures both images are perfectly aligned within the same coordinate frame.
            </div>

            <div>
              <strong>Bilinear Interpolation:</strong> Bilinear Interpolation averages pixel values to color the target pixel which can smoothen the blended edge but create more blurring. This usually creates more natural looking mosaics because the blended edge is smoother, especially in more real world settings.
            </div>
            <div>
              <strong>Nearest Neighbor Interpolation:</strong> Nearest Neighbor Interpolation duplicates the pixel value of the closest pixel which is faster but can create more pixelated edges. In the case of Minecraft, the blocks are already pixelated which gives the nearest neighbor interpolation a very clean look.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/stadium_correspondences.png"
              alt="Stadium Correspondences"
              width={1200}
              height={900}
              className="w-full max-w-4xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Stadium Correspondences</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/doe_correspondences.png"
              alt="Doe Library Correspondences"
              width={1200}
              height={900}
              className="w-full max-w-4xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Doe Library Correspondences</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/stadium_warp.png"
              alt="Stadium Warped"
              width={1200}
              height={900}
              className="w-full max-w-4xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Stadium Warped</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/doe_warp.png"
              alt="Doe Library Warped"
              width={1200}
              height={900}
              className="w-full max-w-4xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Doe Library Warped</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/a3_mc_bilinear_warp.png"
              alt="Minecraft Bilinear Warp"
              width={1200}
              height={900}
              className="w-full max-w-4xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Minecraft Bilinear Warp</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/a3_mc_nn_warp.png"
              alt="Minecraft Nearest Neighbor Warp"
              width={1200}
              height={900}
              className="w-full max-w-4xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Minecraft Nearest Neighbor Warp</p>
          </div>
        </div>

          </section>

          <section className="my-8">
            <h3 className="text-xl font-semibold mb-4">A.4: Blend images into a mosaic (20 pts)</h3>
            <p className="mb-6 text-gray-700">
              Beyond the simple mosaicing that is done by overlaying the images onto a larger canvas, Laplacian pyramid blending can be used to create a more seamless mosaic and correct for errors caused by incongruent point correspondences.
            </p>
        <div className="mb-6 text-gray-700">
          <div className="space-y-3">
            <div>
              <strong>Decomposition:</strong> Laplacian pyramids are built for each of the two aligned images. This process separates each image into multiple layers, with each layer containing details of a different scale (from blurry, broad colors to fine, sharp edges).
            </div>

            <div>
              <strong>Pyramid Blending:</strong> A Gaussian pyramid is created from the blend mask. At each level of the pyramids, the corresponding blurred mask performs a weighted average of the detail layers from the two images. This blends the broad colors smoothly while keeping the fine details sharp.
            </div>

            <div>
              <strong>Reconstruction:</strong> The newly blended pyramid is collapsed by summing all the merged layers back together. This reconstructs a single image where the seam is practically invisible, avoiding the ghosting or blurring artifacts common with simpler blending methods.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/a4_stadium_panorama.png"
              alt="Stadium Panoramic"
              width={1600}
              height={800}
              className="w-full max-w-5xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Stadium Panoramic</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              src="/proj3/a4_doe_sign.png"
              alt="Doe Library Mosaic"
              width={1600}
              height={800}
              className="w-full max-w-5xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Doe Library Mosaic</p>
          </div>

          <div className='flex flex-col items-center lg:col-span-2'>
            <Image
              src="/proj3/a4_mc_laplacian.png"
              alt="Minecraft Laplacian Mosaic"
              width={1600}
              height={800}
              className="w-full max-w-5xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
            />
            <p className="text-lg mt-4 text-center font-medium">Minecraft Laplacian Mosaic</p>
          </div>
        </div>
          </section>
        </div>
      </section>

      {/* Part B Section */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Part B: Automatic Feature Detection and Matching</h2>
        
        <div className="space-y-8">
          <section className="my-8">
            <h3 className="text-xl font-semibold mb-4">B.1: Detecting corner features in an image (20 pts)</h3>
            
            <div className="mb-6 text-gray-700">
              <p>
                {/* Describe your Harris corner detection implementation and results here */}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b1_harris_pts.png"
                  alt="Harris Corner Detection"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Harris Corner Detection</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b1_anms.png"
                  alt="Adaptive Non-Maximum Suppression"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Adaptive Non-Maximum Suppression</p>
              </div>
            </div>
          </section>

          <section className="my-8">
            <h3 className="text-xl font-semibold mb-4">B.2: Extracting a Feature Descriptor for each feature point (20 pts)</h3>
            
            <div className="mb-6 text-gray-700">
              <p>
                {/* Describe your feature descriptor implementation and results here */}
              </p>
            </div>
            <div className="flex justify-center mb-6">
              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b2_feature_descriptors.png"
                  alt="Feature Descriptors"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Feature Descriptors</p>
              </div>
            </div>
          </section>

          <section className="my-8">
            <h3 className="text-xl font-semibold mb-4">B.3: Matching these feature descriptors between two images (20 pts)</h3>
            
            <div className="mb-6 text-gray-700">
              <p>
                {/* Describe your feature matching implementation and results here */}
              </p>
            </div>
            <div className="flex justify-center mb-6">
              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b3_feature_matches.png"
                  alt="Feature Matches"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Feature Matches</p>
              </div>
            </div>
          </section>

          <section className="my-8">
            <h3 className="text-xl font-semibold mb-4">B.4: Use a robust method (RANSAC) to compute and apply homographies (40 pts)</h3>
            
            <div className="mb-6 text-gray-700">
              <p>
                {/* Describe your RANSAC implementation and results here */}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b4_stadium_nearest.png"
                  alt="Stadium - Nearest Neighbor Interpolation"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Stadium - Nearest Neighbor</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b4_stadium_bilinear.png"
                  alt="Stadium - Bilinear Interpolation"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Stadium - Bilinear</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b4_doe_nearest.png"
                  alt="Doe Library - Nearest Neighbor Interpolation"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Doe Library - Nearest Neighbor</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b4_doe_bilinear.png"
                  alt="Doe Library - Bilinear Interpolation"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Doe Library - Bilinear</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b4_mc_nearest.png"
                  alt="Minecraft - Nearest Neighbor Interpolation"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Minecraft - Nearest Neighbor</p>
              </div>

              <div className='flex flex-col items-center'>
                <Image
                  src="/proj3/partb/b4_mc_bilinear.png"
                  alt="Minecraft - Bilinear Interpolation"
                  width={800}
                  height={600}
                  className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                />
                <p className="text-sm mt-2 text-center font-medium">Minecraft - Bilinear</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Reflection: Part A vs Part B</h2>
        <div className="mb-6 text-gray-700">
          <p>
            Between Part A and Part B, the methods significantly improve the results, allowing us to get better results without Laplacian blending to improve fine tune the results at the end. I first implemented the algorithm without ANMS point selection and prefiltered the results to select for the strongest harris points before feature matching. This increased the time to create eac mosaic but still enabled progress without bottlenecking on smarter Harris point selection.
          </p>
        </div>
      </section>
    </div>
  )
}
