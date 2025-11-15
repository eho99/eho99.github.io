import Image from 'next/image'

export default function Project4() {
    return (
        <div className="space-y-8">
            {/* Part 0 Section */}
            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Part 0: Camera Calibration and 3D Scanning</h2>

                <div className="space-y-8">
                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Visualizing Images Spatially</h3>
                        <p className="mb-6 text-gray-700">
                            This section shows the visualiztion in Viser of my selected images with a single Aruco tag that I will also be using to train my NeRF model. I similarly took images of another the gridded Aruco tag page to calibrate the camera by calculating the K matrix.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part0/0.3_viser.png"
                                    alt="Watch Images (reversed relative to World)"
                                    width={1200}
                                    height={900}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-4 text-center font-medium">Watch Images (reversed relative to World)</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part0/0.3_hawaii_viser.png"
                                    alt="Mug Images for NeRF (correctly oriented to World)"
                                    width={1200}
                                    height={900}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-4 text-center font-medium">Mug Images for NeRF (correctly oriented to World)</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* Part 1 Section */}
            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4 text-green-600">Part 1: Fit a Neural Field to a 2D Image</h2>

                <div className="space-y-8">
                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Model Architecture</h3>
                        <div className="mb-6 text-gray-700">
                            <p className="mb-4">
                                The model consists of a positional encoder followed by a multi-layer perceptron (MLP) network.
                                The positional encoder uses sinusoidal functions at different frequencies to map 2D coordinates
                                into a higher-dimensional feature space, enabling the network to learn high-frequency details in the image.
                            </p>

                            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                <h4 className="font-semibold mb-2">Model Parameters:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Network Layers:</strong> 4 linear layers (3 hidden + 1 output)</li>
                                    <li><strong>Hidden Layer Width:</strong> 256 (configurable)</li>
                                    <li><strong>Activation Function:</strong> ReLU for hidden layers, Sigmoid for output</li>
                                    <li><strong>Learning Rate:</strong> 1e-2</li>
                                    <li><strong>Iterations:</strong> 2000</li>
                                    <li><strong>Batch Size:</strong> 10,000</li>
                                    <li><strong>Optimizer:</strong> Adam</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Training Progression Visualization</h3>
                        <p className="mb-6 text-gray-700">
                            {/* Add description of training progression */}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part1/1_fox_recreation.png"
                                    alt="Training Progression - Fox"
                                    width={1200}
                                    height={900}
                                    className="w-full max-w-2xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-lg mt-4 text-center font-medium">Training Progression - Fox</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part1/1_karage_recreation.png"
                                    alt="Training Progression - Karage"
                                    width={1200}
                                    height={900}
                                    className="w-full max-w-2xl rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-lg mt-4 text-center font-medium">Training Progression - Karage</p>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">PSNR Curves</h3>
                        <p className="mb-6 text-gray-700">
                            {/* Add description of PSNR results */}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part1/1_fox_psnr.png"
                                    alt="PSNR Training Curve - Fox"
                                    width={1000}
                                    height={600}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">PSNR Training Curve - Fox</p>
                            </div>

                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part1/1_karage_psnr.png"
                                    alt="PSNR Training Curve - Karage"
                                    width={1000}
                                    height={600}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">PSNR Training Curve - Karage</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* Part 2 Section */}
            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4 text-purple-600">Part 2: Fit a Neural Radiance Field from Multi-view Images</h2>

                <div className="space-y-8">
                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Implementation Description</h3>
                        <div className="mb-6 text-gray-700">
                            <p className="mb-4">
                                The NeRF implementation consists of a positional encoder and a multi-layer perceptron (MLP)
                                that maps 3D positions and viewing directions to RGB colors and volume density values.

                                Notably, I found that the inclusion of a Softplus layer at the end of the model helped to improve results during training and for rendering to output valid densities. While the sigmoid activation limits a model between 0 and 1, I had observed issues with valid density outputs during the training that combined with 0 to 1 range restrictions within the training into a Softplus layer made valid densities.
                            </p>

                            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                <h4 className="font-semibold mb-2">Positional Encoding:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Sinusoidal encoding with frequency bands 2^0 to 2^(L-1)</li>
                                    <li>Separate encoders for position (3D coordinates) and viewing direction</li>
                                    <li>Encoded dimension: d_in + 2 × d_in × L</li>
                                    <li>Enables the network to learn high-frequency geometric and appearance details</li>
                                </ul>
                            </div>

                            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                <h4 className="font-semibold mb-2">Network Architecture:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Density Trunk:</strong> 8 linear layers (256 width each) with ReLU activations</li>
                                    <li><strong>Skip Connection:</strong> Concatenates input position encoding at layer 5</li>
                                    <li><strong>Density Head:</strong> Single linear layer (256 → 1) with Softplus activation</li>
                                    <li><strong>Feature Layer:</strong> Linear layer (256 → 256) for intermediate features</li>
                                    <li><strong>Color Head:</strong> 2 layers combining features and view encoding</li>
                                    <li className="ml-4">- Layer 1: (256 + d_view_enc) → 128 with ReLU</li>
                                    <li className="ml-4">- Layer 2: 128 → 3 (RGB) with Sigmoid</li>
                                </ul>
                            </div>


                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Visualization of Rays and Samples with Cameras</h3>
                        <p className="mb-6 text-gray-700">
                            Visualization of rays and samples with cameras:
                        </p>

                        <div className="flex justify-center mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2/2.3_lego_visualize.png"
                                    alt="Ray Visualization with Cameras"
                                    width={1400}
                                    height={1000}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">Rays and Samples with Cameras</p>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Training Progression</h3>
                        <p className="mb-6 text-gray-700">
                            Visualization of the Lego scene at different training iterations:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2/2.4_lego_iters/render_iter_0.png"
                                    alt="Iteration 0"
                                    width={300}
                                    height={300}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">Iter 0</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2/2.4_lego_iters/render_iter_400.png"
                                    alt="Iteration 400"
                                    width={300}
                                    height={300}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">Iter 400</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2/2.4_lego_iters/render_iter_800.png"
                                    alt="Iteration 800"
                                    width={300}
                                    height={300}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">Iter 800</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2/2.4_lego_iters/render_iter_1200.png"
                                    alt="Iteration 1200"
                                    width={300}
                                    height={300}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">Iter 1200</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2/2.4_lego_iters/render_iter_1600.png"
                                    alt="Iteration 1600"
                                    width={300}
                                    height={300}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">Iter 1600</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2/2.4_lego_iters/render_iter_1999.png"
                                    alt="Iteration 1999"
                                    width={300}
                                    height={300}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">Iter 1999</p>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">PSNR Curve on Validation Set</h3>
                        <p className="mb-6 text-gray-700">
                            PSNR curve for the Lego scene validation set with intermediate visualizations:
                        </p>

                        <div className="flex justify-center mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2/2.4_lego_pnsr.png"
                                    alt="PSNR Curve with Intermediate Visualizations"
                                    width={1400}
                                    height={800}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">PSNR on Validation Set with Intermediate Renders</p>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Spherical Rendering Video</h3>
                        <p className="mb-6 text-gray-700">
                            Spherical rendering of the Lego scene after training:
                        </p>

                        <div className="flex justify-center mb-6">
                            <div className='flex flex-col items-center'>
                                <video
                                    src="/proj4/part2/2.4_lego_iters/lego_spherical.mp4"
                                    controls
                                    className="w-full max-w-3xl rounded-lg border shadow-lg"
                                >
                                    Your browser does not support the video tag.
                                </video>
                                <p className="text-sm mt-2 text-center font-medium">Spherical Rendering of Lego Scene</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* Part 2.6 Section */}
            <section className="my-8">
                <h2 className="text-2xl font-semibold mb-4 text-orange-600">Part 2.6: Training with Your Own Data</h2>

                <div className="space-y-8">
                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Novel Views Rendering</h3>
                        <p className="mb-6 text-gray-700">
                            Circular video rendering of my Hawaii mug from the trained NeRF model
                        </p>

                        <div className="flex justify-center mb-6">
                            <div className='flex flex-col items-center'>
                                <video
                                    src="/proj4/part2_6/mug-circle-vid.mp4"
                                    controls
                                    className="w-full max-w-3xl rounded-lg border shadow-lg"
                                >
                                    Your browser does not support the video tag.
                                </video>
                                <p className="text-sm mt-2 text-center font-medium">Novel Views - Camera Circling Hawaii Mug</p>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Implementation Details and Changes</h3>
                        <div className="mb-6 text-gray-700">
                            <p className="mb-4">
                                I did more manual hyperparameter tuning and monitoring on the PSNR values through training in order to dial in a good value. After this, I increased the iteration count to achieve better overall performance.
                            </p>

                            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                <h4 className="font-semibold mb-2">Key Changes:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Near: 0.008</strong> This was found through manual tuning and monitoring of the PSNR values during training.</li>
                                    <li><strong>Far: 0.375</strong> This was found through manual tuning and monitoring of the PSNR values during training.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">PSNR Curve</h3>

                        <div className="flex justify-center mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/2.6_psnr_mug.png"
                                    alt="PSNR Over Iterations - Hawaii Mug"
                                    width={1000}
                                    height={600}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">PSNR Over Iterations</p>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Training Progression</h3>
                        <p className="mb-6 text-gray-700">
                            Visualization of the Hawaii mug NeRF at different training iterations:
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_0.png"
                                    alt="Iteration 0"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 0</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_500.png"
                                    alt="Iteration 500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_1000.png"
                                    alt="Iteration 1000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 1000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_1500.png"
                                    alt="Iteration 1500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 1500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_2000.png"
                                    alt="Iteration 2000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 2000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_2500.png"
                                    alt="Iteration 2500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 2500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_3000.png"
                                    alt="Iteration 3000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 3000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_3500.png"
                                    alt="Iteration 3500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 3500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_4000.png"
                                    alt="Iteration 4000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 4000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_4500.png"
                                    alt="Iteration 4500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 4500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_5000.png"
                                    alt="Iteration 5000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 5000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_5500.png"
                                    alt="Iteration 5500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 5500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_6000.png"
                                    alt="Iteration 6000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 6000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_6500.png"
                                    alt="Iteration 6500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 6500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_7000.png"
                                    alt="Iteration 7000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 7000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_7500.png"
                                    alt="Iteration 7500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 7500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_8000.png"
                                    alt="Iteration 8000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 8000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_8500.png"
                                    alt="Iteration 8500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 8500</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_9000.png"
                                    alt="Iteration 9000"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 9000</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/hawaii-mug-nerf/render_iter_9500.png"
                                    alt="Iteration 9500"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-xs mt-2 text-center font-medium">Iter 9500</p>
                            </div>
                        </div>
                    </section>

                    <section className="my-8">
                        <h3 className="text-xl font-semibold mb-4">Final Render Comparison</h3>
                        <p className="mb-6 text-gray-700">
                            Side-by-side comparison of the final NeRF model render and ground truth image:
                        </p>

                        <div className="flex justify-center mb-6">
                            <div className='flex flex-col items-center'>
                                <Image
                                    src="/proj4/part2_6/2.6_final_render.png"
                                    alt="Final Render vs Ground Truth"
                                    width={1400}
                                    height={800}
                                    className="rounded-lg border shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <p className="text-sm mt-2 text-center font-medium">Final Render vs Ground Truth Comparison</p>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
