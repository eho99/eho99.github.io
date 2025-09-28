import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Project2() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <section className="space-y-4">
                <h1 className="text-4xl font-bold">Fun with Filters and Frequencies!</h1>
                <div className="flex gap-2 pt-2">
                    <Button asChild size="sm" variant="secondary">
                        <a href="#part-1">Jump to Part 1</a>
                    </Button>
                    <Button asChild size="sm" variant="secondary">
                        <a href="#part-2">Jump to Part 2</a>
                    </Button>
                </div>
            </section>

            <Separator />

            {/* Part 1 */}
            <section id="part-1" className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">Part 1 — Filters</h2>
                </div>

                {/* 1.1 Convolutions from Scratch! */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold">1.1 Convolutions from Scratch!</h3>
                        <div className="space-y-4">
                            <details className="bg-muted/10 rounded-lg border">
                                <summary className="cursor-pointer p-4 font-medium hover:bg-muted/20 transition-colors">
                                    View Convolution Implementation Code
                                </summary>
                                <div className="px-4 pb-4">
                                    <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
                                        <code>{`def naive_convolution(image, kernel):
                            kernel = np.flip(kernel)
                            image_height, image_width = image.shape
                            kernel_height, kernel_width = kernel.shape
                            output_height = image_height - kernel_height + 1
                            output_width = image_width - kernel_width + 1
                            output = np.zeros((output_height, output_width))

                            for i in range(output_height):
                                for j in range(output_width):
                                    for ki in range(kernel_height):
                                        for kj in range(kernel_width):
                                            output[i, j] += image[i + ki, j + kj] * kernel[ki, kj]
                            return output

                        def np_convolution(image, kernel):
                            kernel = np.flip(kernel)
                            image_height, image_width = image.shape
                            kernel_height, kernel_width = kernel.shape
                            output_height = image_height - kernel_height + 1
                            output_width = image_width - kernel_width + 1
                            output = np.zeros((output_height, output_width))

                            for i in range(output_height):
                                for j in range(output_width):
                                    output[i, j] = np.sum(image[i:i + kernel_height, j:j + kernel_width] * kernel)
                            return output`}</code>
                                    </pre>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Original Image - shown once at larger size */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium text-center">Original Image</h4>
                        <div className="max-w-2xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/src/1-1.jpg" alt="Original headshot image" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-xl font-medium text-center">Box Filter Result</h4>
                            <div className="max-w-2xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/1-1-headshot-boxfilter.png" alt="Box filter result" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-medium text-center">Dx (Horizontal Gradient)</h4>
                            <div className="max-w-2xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/1-1-headshot-dx.png" alt="Dx gradient result" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-medium text-center">Dy (Vertical Gradient)</h4>
                            <div className="max-w-2xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/1-1-headshot-dy.png" alt="Dy gradient result" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Performance Comparison */}
                    <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                        <h4 className="text-lg font-semibold">Performance Comparison</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div>
                                <h5 className="font-medium mb-2">Box Filter Timing:</h5>
                                <ul className="space-y-1 text-muted-foreground">
                                    <li>- Naive: 12.2295s</li>
                                    <li>- Numpy slicing: 0.6449s</li>
                                    <li>- Scipy convolve2d: 0.0226s</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-medium mb-2">Dx Operator Timing:</h5>
                                <ul className="space-y-1 text-muted-foreground">
                                    <li>- Naive: 0.2947s</li>
                                    <li>- Numpy slicing: 0.6425s</li>
                                    <li>- Scipy convolve2d: 0.0025s</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-medium mb-2">Dy Operator Timing:</h5>
                                <ul className="space-y-1 text-muted-foreground">
                                    <li>- Naive: 0.5626s</li>
                                    <li>- Numpy slicing: 1.1316s</li>
                                    <li>- Scipy convolve2d: 0.0072s</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 1.2 Finite Difference Operator */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold">1.2 Finite Difference Operator</h3>
                    </div>

                    {/* Original Cameraman Image */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium text-center">Original Cameraman Image</h4>
                        <div className="max-w-xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/src/1-2-cameraman.png" alt="Original cameraman image" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Results showing the complete finite difference pipeline */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-center">Finite Difference Results</h4>
                        <div className="max-w-2xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/results/1-2-cameraman-fdo.png" alt="Finite difference operator results showing partial derivatives, gradient magnitude, and edge detection" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 1.3 Derivative of Gaussian (DoG) Filter */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold">1.3 Derivative of Gaussian (DoG) Filter</h3>
                    </div>

                    {/* Step 1: Smoothed Results Comparison */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium text-center">Gaussian Smoothing vs Raw Finite Differences</h4>
                        <div className="max-w-2xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/results/1-3-dog-smooth.png" alt="Comparison of smoothed vs raw finite difference results" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Step 2: DoG Kernels */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium text-center">Derivative of Gaussian (DoG) Kernels</h4>
                        <div className="max-w-xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/results/1-3-kernels.png" alt="Derivative of Gaussian kernels showing DoG_x and DoG_y filters" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Step 3: DoG Filter Results */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium text-center">Single-Step DoG Filter Results</h4>
                        <div className="max-w-2xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/results/1-3-from-DoG.png" alt="Results from applying DoG filters directly" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Separator />

            {/* Part 2 */}
            <section id="part-2" className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">Part 2 — Frequencies</h2>
                </div>

                {/* 2.1 Image "Sharpening" */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold">2.1 Image "Sharpening"</h3>
                    </div>

                    {/* Taj Mahal Results */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-center">Taj Mahal Sharpening Results</h4>

                        {/* Original Taj */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Original Image</h5>
                            <div className="max-w-2xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/src/2-1-taj.jpg" alt="Original Taj Mahal image" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Taj Results */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Sharpened</h5>
                            <div className="max-w-3xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/2-1-taj.png" alt="Taj Mahal unsharp mask results showing blurred, high-frequency, and sharpened versions" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Squirtle Results */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-center">Squirtle Squad</h4>

                        {/* Original Squirtle */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Original Image</h5>
                            <div className="max-w-2xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/src/2-1-squirtle_squad.jpg" alt="Original Squirtle Squad image" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Squirtle Results */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Sharpened</h5>
                            <div className="max-w-3xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/2-1-squirtle.png" alt="Squirtle Squad unsharp mask results" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Piplup Results */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-center">Piplup Sharpening Results</h4>

                        {/* Original Piplup */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Original Image</h5>
                            <div className="max-w-2xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/src/2-1-piplup.png" alt="Original Piplup image" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Piplup Results */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Blurred to Sharpened</h5>
                            <div className="max-w-3xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/2-1-piplup.png" alt="Piplup unsharp mask results" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                        <h5 className="font-medium mb-2">Impacts of Sharpening Factors</h5>
                        <div className="text-sm text-muted-foreground space-y-2">
                            <p>
                                <strong>Taj Mahal (α = 1.5):</strong> The impacts of the sharpening are apparent but not overly strong, emphasizing many of the edges and features through a seemingly darkening effect.
                            </p>
                            <p>
                                <strong>Squirtle Squad (α = 2.0):</strong> With α = 2.0, the sharpening effect is slightly more pronounced compared to the Taj Mahal image. This can be seen in the artifacting within the sky.
                            </p>
                            <p>
                                <strong>Piplup (α = 10.0):</strong> Since we are sharpening from a blurred image, I selected a much higher α to recreate the original, higher definition image as much as possible. With lower values of α, the image would remain much blurrier.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2.2 Hybrid Images (20 pts) */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold">2.2 Hybrid Images</h3>
                    </div>

                    {/* Derek + Nutmeg - Detailed Process */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium text-center">Derek + Nutmeg (Complete Process)</h4>
                        <div className="max-w-4xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/results/2-2-derek-nutmeg.png" alt="Derek and Nutmeg hybrid image process showing filtering, FFTs, and final result" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Ditto + Eevee */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium text-center">Ditto + Eevee Hybrid</h4>
                        <div className="max-w-2xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/results/2-2-ditto-eevee.png" alt="Ditto and Eevee hybrid image" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Mudkip + Pichu */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-medium text-center">Mudkip + Pichu Hybrid</h4>
                        <div className="max-w-2xl mx-auto">
                            <div className="rounded-lg overflow-hidden border bg-muted/20">
                                <img src="/proj2/results/2-2-mudkip-pichu.png" alt="Mudkip and Pichu hybrid image" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2.3 + 2.4 Gaussian/Laplacian Stacks & Multiresolution Blending */}
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className="text-2xl font-semibold">2.3 & 2.4 Gaussian/Laplacian Stacks & Multiresolution Blending</h3>
                    </div>

                    {/* Apple + Orange - Classic Example with Complete Process */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-center">Apple + Orange (Complete Process Visualization)</h4>

                        {/* Original Images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h5 className="text-lg font-medium text-center">Apple</h5>
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/src/2-3-apple.jpeg" alt="Original apple image" className="w-full h-auto" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-lg font-medium text-center">Orange </h5>
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/src/2-3-orange.jpeg" alt="Original orange image" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Laplacian Pyramid Visualization */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Laplacian Pyramid Blending Process</h5>
                            <div className="max-w-4xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/2-3-lapacian-pyramid.png" alt="Laplacian pyramid visualization showing multi-resolution blending process" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Final Blended Result */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Blended Oraple</h5>
                            <div className="max-w-xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/2-3-oraple-blended.png" alt="Final apple-orange blended result" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Custom Vulpix Blending */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-medium text-center">Custom Blending: Alolan Vulpix + Vulpix</h4>

                        {/* Original Images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h5 className="text-lg font-medium text-center">Alolan Vulpix (Original)</h5>
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/2-4-alolan-vulpix.jpg" alt="Original Alolan Vulpix image" className="w-full h-auto" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-lg font-medium text-center">Regular Vulpix (Original)</h5>
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/2-4-vulpix.jpg" alt="Original Vulpix image" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>

                        {/* Blended Result */}
                        <div className="space-y-3">
                            <h5 className="text-lg font-medium text-center">Multiresolution Blended Result</h5>
                            <div className="max-w-xl mx-auto">
                                <div className="rounded-lg overflow-hidden border bg-muted/20">
                                    <img src="/proj2/results/2-4-vulpix-blended.png" alt="Blended Vulpix result using multiresolution technique" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <Separator />

            <section className="space-y-3">
                <h2 className="text-2xl font-semibold">Reflection</h2>
                <p className="text-muted-foreground max-w-3xl">
                    From this project, I learned about how versatile and powerful convolutional kernels are within image processing. From edge detection to the multi-resolution blending, it was really neat to see how these kernels built up on each other and combined to manipulate images to different results. I particularly found the hybrid images interesting (especially when looking with and without glasses) for how the different features can be accentuated to create different visual effects.
                </p>
            </section>
        </div>
    )
}

