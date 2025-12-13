
import Image from 'next/image';

const ImageCard = ({ src, alt, caption, width = 600, height = 400 }: { src: string, alt: string, caption?: string, width?: number, height?: number }) => (
    <div className="flex flex-col items-center">
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-lg border shadow-sm hover:shadow-lg transition-shadow bg-white"
        />
        {caption && <p className="text-sm mt-3 text-center font-medium text-gray-600">{caption}</p>}
    </div>
);

const Section = ({ title, children, color = "blue" }: { title: string, children: React.ReactNode, color?: string }) => {
    const colorClasses = {
        blue: "text-blue-600",
        green: "text-green-600",
        purple: "text-purple-600",
        orange: "text-orange-600",
        red: "text-red-600"
    };
    return (
        <section className="my-12">
            <h3 className={`text-xl font-semibold mb-6 ${colorClasses[color as keyof typeof colorClasses] || "text-gray-900"}`}>{title}</h3>
            <div className="space-y-8">
                {children}
            </div>
        </section>
    );
};

export default function Project5() {
    return (
        <div className="space-y-4 max-w-6xl mx-auto">
            {/* PART A */}
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-4">Part A: The Power of Diffusion Models!</h2>

            <Section title="1.1 Implementing the Forward Process" color="blue">
                <div className="grid grid-cols-1 justify-center gap-6">
                    <ImageCard src="/proj5/parta/1.1/noisy.png" alt="Noisy Image" caption="Noisy Image Generation" />
                </div>
            </Section>

            <Section title="1.2 Classical Denoising" color="blue">
                <div className="grid grid-cols-1 justify-center gap-6">
                    <ImageCard src="/proj5/parta/1.2/250.png" alt="Step 250" caption="t = 250" width={400} height={300} />
                    <ImageCard src="/proj5/parta/1.2/500.png" alt="Step 500" caption="t = 500" width={400} height={300} />
                    <ImageCard src="/proj5/parta/1.2/750.png" alt="Step 750" caption="t = 750" width={400} height={300} />
                </div>
            </Section>

            <Section title="1.3 One-Step Denoising" color="blue">
                <div className="grid grid-cols-1 justify-center gap-6">
                    <ImageCard src="/proj5/parta/1.3/1.3_250.png" alt="Step 250" caption="t = 250" width={400} height={300} />
                    <ImageCard src="/proj5/parta/1.3/1.3_500.png" alt="Step 500" caption="t = 500" width={400} height={300} />
                    <ImageCard src="/proj5/parta/1.3/1.3_750.png" alt="Step 750" caption="t = 750" width={400} height={300} />
                </div>
            </Section>

            <Section title="1.4 Iterative Denoising" color="blue">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                    <ImageCard src="/proj5/parta/1.4/step_10.png" alt="Step 10" caption="Loop 10" width={300} height={200} />
                    <ImageCard src="/proj5/parta/1.4/step_15.png" alt="Step 15" caption="Loop 15" width={300} height={200} />
                    <ImageCard src="/proj5/parta/1.4/step_20.png" alt="Step 20" caption="Loop 20" width={300} height={200} />
                    <ImageCard src="/proj5/parta/1.4/step_25.png" alt="Step 25" caption="Loop 25" width={300} height={200} />
                    <ImageCard src="/proj5/parta/1.4/step_30.png" alt="Step 30" caption="Loop 30" width={300} height={200} />
                </div>

                <div className="grid grid-cols-1 justify-center gap-6">
                    <ImageCard src="/proj5/parta/1.4/1.4.output.png" alt="Iterative Denoising Result" caption="Image-to-Image Translation Result" width={800} height={600} />
                </div>
            </Section>

            <Section title="1.5 Diffusion Model Sampling" color="blue">
                <p className="text-gray-700 mb-4">I was particularly impressed with the reflection against the water, and the somewhat grainy and blotchy texture on the trees and leaves makes for a unique painted style. Not all images, however, have as high of quality.</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ImageCard src="/proj5/parta/1.5/example_1.png" alt="Example 1" caption="Example 1" />
                    <ImageCard src="/proj5/parta/1.5/example_2.png" alt="Example 2" caption="Example 2" />
                    <ImageCard src="/proj5/parta/1.5/example_3.png" alt="Example 3" caption="Example 3" />
                    <ImageCard src="/proj5/parta/1.5/example_4.png" alt="Example 4" caption="Example 4" />
                    <ImageCard src="/proj5/parta/1.5/example_5.png" alt="Example 5" caption="Example 5" />
                </div>
            </Section>

            <Section title="1.6 Classifier-Free Guidance (CFG)" color="blue">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ImageCard src="/proj5/parta/1.6/example_1.png" alt="Example 1" caption="Example 1" />
                    <ImageCard src="/proj5/parta/1.6/example_2.png" alt="Example 2" caption="Example 2" />
                    <ImageCard src="/proj5/parta/1.6/example_3.png" alt="Example 3" caption="Example 3" />
                    <ImageCard src="/proj5/parta/1.6/example_4.png" alt="Example 4" caption="Example 4" />
                    <ImageCard src="/proj5/parta/1.6/example_5.png" alt="Example 5" caption="Example 5" />
                </div>
            </Section>

            <Section title="1.7 Image-to-image Translation" color="blue">
                <div className="my-8">
                    <h4 className="text-lg font-semibold mb-2 text-center">Campanile</h4>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 place-items-center">
                        <ImageCard src="/proj5/parta/1.7/campanile.png" alt="Campanile" caption="Campanile" />
                    </div>
                </div>
                <div className="my-8">
                    <h4 className="text-lg font-semibold mb-2 text-center">Great Wall</h4>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 place-items-center">
                        <ImageCard src="/proj5/parta/1.7/great_wall/great_wall.png" alt="Result" caption="Generated Result" />
                    </div>
                </div>
                <div className="my-8">
                    <h4 className="text-lg font-semibold mb-2 text-center">Tiananmen</h4>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 place-items-center">
                        <ImageCard src="/proj5/parta/1.7/tianamen/tianamen.png" alt="Result" caption="Generated Result" />
                    </div>
                </div>
            </Section>

            <Section title="1.7.1 Editing Hand-Drawn and Web Images" color="blue">


                <div className="my-8">
                    <h4 className="text-lg font-semibold mb-2 text-center">Hand Drawn Bow</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ImageCard src="/proj5/parta/1.7.1/bow/source.png" alt="Source" caption="Original Drawing" />
                        <ImageCard src="/proj5/parta/1.7.1/bow/1.png" alt="Edit 1" caption="Edit 1" />
                        <ImageCard src="/proj5/parta/1.7.1/bow/2.png" alt="Edit 2" caption="Edit 2" />
                        <ImageCard src="/proj5/parta/1.7.1/bow/3.png" alt="Edit 3" caption="Edit 3" />
                        <ImageCard src="/proj5/parta/1.7.1/bow/4.png" alt="Edit 4" caption="Edit 4" />
                        <ImageCard src="/proj5/parta/1.7.1/bow/5.png" alt="Edit 5" caption="Edit 5" />
                        <ImageCard src="/proj5/parta/1.7.1/bow/6.png" alt="Edit 6" caption="Edit 6" />
                    </div>
                </div>
                <div className="my-8">
                    <h4 className="text-lg font-semibold mb-2 text-center">Hand Drawn Olaf</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ImageCard src="/proj5/parta/1.7.1/olaf/source.png" alt="Source" caption="Original Drawing" />
                        <ImageCard src="/proj5/parta/1.7.1/olaf/1.png" alt="Edit 1" caption="Edit 1" />
                        <ImageCard src="/proj5/parta/1.7.1/olaf/2.png" alt="Edit 2" caption="Edit 2" />
                        <ImageCard src="/proj5/parta/1.7.1/olaf/3.png" alt="Edit 3" caption="Edit 3" />
                        <ImageCard src="/proj5/parta/1.7.1/olaf/4.png" alt="Edit 4" caption="Edit 4" />
                        <ImageCard src="/proj5/parta/1.7.1/olaf/5.png" alt="Edit 5" caption="Edit 5" />
                        <ImageCard src="/proj5/parta/1.7.1/olaf/6.png" alt="Edit 6" caption="Edit 6" />
                    </div>
                </div>

                <div className="my-8">
                    <h4 className="text-lg font-semibold mb-2 text-center">Duskull (Web Image)</h4>
                    <p className="text-center text-sm text-gray-500 mb-4">Source: <a href="https://img.pokemondb.net/artwork/large/duskull.jpg" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">PokemonDB</a></p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ImageCard src="/proj5/parta/1.7.1/duskull/original.png" alt="Source" caption="Original" />
                        <ImageCard src="/proj5/parta/1.7.1/duskull/1.png" alt="Edit 1" caption="Edit 1" />
                        <ImageCard src="/proj5/parta/1.7.1/duskull/3.png" alt="Edit 3" caption="Edit 3" />
                        <ImageCard src="/proj5/parta/1.7.1/duskull/5.png" alt="Edit 5" caption="Edit 5" />
                        <ImageCard src="/proj5/parta/1.7.1/duskull/7.png" alt="Edit 7" caption="Edit 7" />
                        <ImageCard src="/proj5/parta/1.7.1/duskull/10.png" alt="Edit 10" caption="Edit 10" />
                        <ImageCard src="/proj5/parta/1.7.1/duskull/20.png" alt="Edit 20" caption="Edit 20" />
                    </div>
                </div>
            </Section>

            <Section title="1.7.2 Inpainting" color="blue">
                <p className="text-gray-700 mb-4">Using the diffusion model to fill in masked regions of an image.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <ImageCard src="/proj5/parta/1.7.2/campanile_setup.png" alt="Campanile Setup" caption="Campanile Setup" />
                    <ImageCard src="/proj5/parta/1.7.2/campanile_masked.png" alt="Campanile Result" caption="Campanile Result" />
                </div>

                <div className="space-y-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-center">Great Wall</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ImageCard src="/proj5/parta/1.7/great_wall/src_great_wall.jpg" alt="Original" caption="Original" />
                            <ImageCard src="/proj5/parta/1.7/great_wall/great_wall_mask.jpg" alt="Mask" caption="Mask" />
                            <ImageCard src="/proj5/parta/1.7.2/great_wall_masked.png" alt="Result" caption="Masked Result" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-center">Tiananmen Square</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ImageCard src="/proj5/parta/1.7/tianamen/src_tianamen.jpg" alt="Original" caption="Original" />
                            <ImageCard src="/proj5/parta/1.7/tianamen/tianamen_mask.jpg" alt="Mask" caption="Mask" />
                            <ImageCard src="/proj5/parta/1.7.2/tianamen_square_masked.png" alt="Result" caption="Masked Result" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="1.7.3 Text-Conditional Image-to-image Translation" color="blue">
                <p className="text-gray-700 mb-4">Translating images based on text prompts.</p>
                <div className="grid grid-cols-1 justify-items-center gap-6">
                    <ImageCard src="/proj5/parta/1.7.3/campanile_basketball.png" alt="Campanile" caption='Campanile -> "a basketball"' />
                    <ImageCard src="/proj5/parta/1.7.3/tianamen_penguin.png" alt="Tiananmen" caption='Tiananmen -> "an oil painting of a penguin"' />
                    <ImageCard src="/proj5/parta/1.7.3/great_wall_house.png" alt="Great Wall" caption='Great Wall -> "an oil painting of a house on the hill"' />
                </div>
            </Section>

            <Section title="1.8 Visual Anagrams" color="blue">
                <div className="grid grid-cols-1 gap-6">
                    <ImageCard src="/proj5/parta/1.8/duck_penguin.png" alt="Duck Penguin" caption="Duck + Penguin" />
                    <ImageCard src="/proj5/parta/1.8/goofy_penguin_supercar.png" alt="Goofy" caption="Funny Looking Penguin Supercar" />
                    <ImageCard src="/proj5/parta/1.8/snowy_mountain_sunset.png" alt="Snowy Mountain" caption="Snowy Mountain + Sunset" />
                </div>
            </Section>

            <Section title="1.9 Hybrid Images" color="blue">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ImageCard src="/proj5/parta/1.9/duck_penguin.png" alt="Duck Penguin" caption="Duck + Penguin" />
                    <ImageCard src="/proj5/parta/1.9/panda_penguin.png" alt="Panda Penguin" caption="Panda + Penguin" />
                    <ImageCard src="/proj5/parta/1.9/penguin_house.png" alt="Penguin House" caption="Penguin + House" />
                </div>
            </Section>

            {/* PART B */}
            <div className="mt-20 mb-10 border-t pt-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Part B: Diffusion Models from Scratch!</h2>
            </div>

            <Section title="Part 1: Training a Single-Step Denoising UNet" color="green">
                <div className="mb-8">
                    <h4 className="font-semibold text-center mb-2">Training Loss</h4>
                    <ImageCard src="/proj5/partb/1.2.1/training_loss.png" alt="Training Loss" caption="Loss Curve" />
                </div>
                <div className="mb-8">
                    <h4 className="font-semibold text-center mb-2">Epochs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center mb-4">
                        <ImageCard src="/proj5/partb/1.2.1/epoch1.png" width={300} height={300} alt="Epoch 1" caption="Epoch 1" />
                        <ImageCard src="/proj5/partb/1.2.1/epoch2.png" width={300} height={300} alt="Epoch 2" caption="Epoch 2" />
                        <ImageCard src="/proj5/partb/1.2.1/epoch3.png" width={300} height={300} alt="Epoch 3" caption="Epoch 3" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
                        <ImageCard src="/proj5/partb/1.2.1/epoch4.png" width={300} height={300} alt="Epoch 4" caption="Epoch 4" />
                        <ImageCard src="/proj5/partb/1.2.1/epoch5.png" width={300} height={300} alt="Epoch 5" caption="Epoch 5" />
                    </div>
                </div>
            </Section>

            <Section title="1.2.2 Out-of-Distribution Testing" color="green">
                <p className="text-gray-700 mb-4">Testing the denoiser on different noise levels.</p>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ImageCard src="/proj5/partb/1.2.2/noise_0.png" width={300} height={300} alt="Noise 0" caption="Sigma=0.0" />
                        <ImageCard src="/proj5/partb/1.2.2/noise_2.png" width={300} height={300} alt="Noise 2" caption="Sigma=0.2" />
                        <ImageCard src="/proj5/partb/1.2.2/noise_4.png" width={300} height={300} alt="Noise 4" caption="Sigma=0.4" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ImageCard src="/proj5/partb/1.2.2/noise_5.png" width={300} height={300} alt="Noise 5" caption="Sigma=0.5" />
                        <ImageCard src="/proj5/partb/1.2.2/noise_6.png" width={300} height={300} alt="Noise 6" caption="Sigma=0.6" />
                        <ImageCard src="/proj5/partb/1.2.2/noise_8.png" width={300} height={300} alt="Noise 8" caption="Sigma=0.8" />
                    </div>
                    <div className="grid grid-cols-1 justify-items-center">
                        <ImageCard src="/proj5/partb/1.2.2/noise_10.png" width={300} height={300} alt="Noise 10" caption="Sigma=1.0" />
                    </div>
                </div>
            </Section>

            <Section title="1.2.3 Denoising Pure Noise" color="green">
                <p className="text-gray-700 mb-4">These are the results of training the UNet on pure noise. As seen below, the training loss did not improve over the course of training, nor have the outputs of the model evaluation changed. This can be explained by how the UNet calculates loss. As the model attempts to find the minimum squared differences between the output and the target, it outputs the most "average" looking number, crossing between a 3 and an 8. This represents the "centroid" of the digit clusters, stemming from pure noise. </p>

                <div className="mb-8">
                    <h4 className="font-semibold text-center mb-2">Training Loss</h4>
                    <ImageCard src="/proj5/partb/1.2.3/training_loss.png" alt="Training Loss" caption="Loss Curve" />
                </div>
                <div className="mb-8">
                    <h4 className="font-semibold text-center mb-2">Epochs</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center mb-4">
                        <ImageCard src="/proj5/partb/1.2.3/epoch_1.png" width={300} height={300} alt="Epoch 1" caption="Epoch 1" />
                        <ImageCard src="/proj5/partb/1.2.3/epoch_2.png" width={300} height={300} alt="Epoch 2" caption="Epoch 2" />
                        <ImageCard src="/proj5/partb/1.2.3/epoch_3.png" width={300} height={300} alt="Epoch 3" caption="Epoch 3" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
                        <ImageCard src="/proj5/partb/1.2.3/epoch_4.png" width={300} height={300} alt="Epoch 4" caption="Epoch 4" />
                        <ImageCard src="/proj5/partb/1.2.3/epoch_5.png" width={300} height={300} alt="Epoch 5" caption="Epoch 5" />
                    </div>
                </div>
            </Section>

            <Section title="Part 2: Training a Flow Matching Model" color="purple">
                <p className="text-gray-700 mb-4">Time-Conditioned UNet</p>

                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <h4 className="font-semibold text-center mb-2">Training Loss</h4>
                        <ImageCard src="/proj5/partb/2.2/training_loss.png" alt="Training Loss" caption="Class-Conditioned Loss" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-center mb-2">Generated Digits over Epochs</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <ImageCard src="/proj5/partb/2.3/epoch_1_full.png" width={300} height={300} alt="Epoch 1" caption="Epoch 1" />
                            <ImageCard src="/proj5/partb/2.3/epoch_5_full.png" width={300} height={300} alt="Epoch 5" caption="Epoch 5" />
                            <ImageCard src="/proj5/partb/2.3/epoch_10_full.png" width={300} height={300} alt="Epoch 10" caption="Epoch 10" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="2.4 Adding Class-Conditioning to UNet" color="orange">
                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <h4 className="font-semibold text-center mb-2">Training Loss</h4>
                        <ImageCard src="/proj5/partb/2.5/training_losses.png" alt="Training Loss" caption="Training Loss" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-center mb-2">Results</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <ImageCard src="/proj5/partb/2.6/epoch_1.png" width={300} height={300} alt="Epoch 1" caption="Epoch 1" />
                            <ImageCard src="/proj5/partb/2.6/epoch_5.png" width={300} height={300} alt="Epoch 5" caption="Epoch 5" />
                            <ImageCard src="/proj5/partb/2.6/epoch_10.png" width={300} height={300} alt="Epoch 10" caption="Epoch 10" />
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="2.6 Class-Conditioned UNet without Learning Rate Scheduler" color="orange">
                <p className="text-gray-700 mb-4">By removing the training loss scheduler, I set the base learning rate to be smaller (1e-3) to achieve similar results. With a slower learning rate, we can be more confident in minimizing the loss with precision. </p>

                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <h4 className="font-semibold text-center mb-2">Training Loss</h4>
                        <ImageCard src="/proj5/partb/2.6_no_schedule/training_loss.png" alt="Training Loss Without LR Scheduler" caption="Training Loss Without LR Scheduler" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-center mb-2">CFG Results</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            <ImageCard src="/proj5/partb/2.6_no_schedule/epoch_1.png" width={300} height={300} alt="Epoch 1 No LR" caption="Epoch 1" />
                            <ImageCard src="/proj5/partb/2.6_no_schedule/epoch_5.png" width={300} height={300} alt="Epoch 5 No LR" caption="Epoch 5" />
                            <ImageCard src="/proj5/partb/2.6_no_schedule/epoch_10.png" width={300} height={300} alt="Epoch 10 No LR" caption="Epoch 10" />
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    );
}
