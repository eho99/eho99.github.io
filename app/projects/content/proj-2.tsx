import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Project2() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <section className="space-y-4">
                <Badge variant="outline" className="w-fit">Project 2</Badge>
                <h1 className="text-4xl font-bold">Fun with Filters and Frequencies!</h1>
                <p className="text-muted-foreground max-w-3xl">
                    {/* TODO: Briefly describe the goal of the project in 1–2 sentences. */}
                    Add a short overview of what you implemented and what the reader will see below.
                </p>
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
                    <p className="text-muted-foreground max-w-3xl">
                        {/* TODO: One-liner about this part, e.g., edge detection with finite differences and DoG, sharpening, etc. */}
                        Briefly summarize what you implemented in this part.
                    </p>
                </div>

                {/* 1.1 Convolutions from Scratch! (10 pts) */}
                <Card>
                    <CardHeader>
                        <CardTitle>1.1 Convolutions from Scratch!</CardTitle>
                        <CardDescription>
                            {/* TODO: Implement convolution without using high-level library conv APIs. Discuss boundary handling (zero-pad, reflect, crop), stride = 1 assumption, and kernel flipping vs correlation. */}
                            Describe your implementation details and decisions.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FigureBox label="Input image" />
                            <FigureBox label="Kernel (matrix or heatmap)" />
                            <FigureBox label="Convolved output" />
                        </div>
                        <NotesBox>
                            {/* TODO: Note kernel sizes tried (e.g., box blur, Gaussian, edge detector), padding choice, and visual results. */}
                            Add observations, include any timing notes if measured.
                        </NotesBox>
                    </CardContent>
                </Card>

                {/* 1.2 Finite Difference Operator (10 pts) */}
                <Card>
                    <CardHeader>
                        <CardTitle>1.2 Finite Difference Operator</CardTitle>
                        <CardDescription>
                            {/* TODO: Explain gradients with Dx/Dy, gradient magnitude, and edge thresholding. */}
                            Include formulas or pseudo-code for computing |∇I| and thresholding.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FigureBox label="Input" />
                            <FigureBox label="|∇I| (magnitude)" />
                            <FigureBox label="Edges (thresholded)" />
                        </div>
                        <NotesBox>
                            {/* TODO: Mention thresholds used and observations. */}
                            Add notes about chosen thresholds and what you observed.
                        </NotesBox>
                    </CardContent>
                </Card>

                {/* 1.3 Derivative of Gaussian (DoG) Filter (10 pts) */}
                <Card>
                    <CardHeader>
                        <CardTitle>1.3 Derivative of Gaussian (DoG) Filter</CardTitle>
                        <CardDescription>
                            {/* TODO: Compare DoG vs finite difference. Show smoothing before gradients. */}
                            Explain why smoothing helps and show comparative results.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FigureBox label="Input" />
                            <FigureBox label="DoG magnitude" />
                            <FigureBox label="Edges (thresholded)" />
                        </div>
                        <NotesBox>
                            {/* TODO: Sigma, kernel sizes, performance notes. */}
                            Record σ, kernel size, and any quantitative/qualitative differences.
                        </NotesBox>
                    </CardContent>
                </Card>
            </section>

            <Separator />

            {/* Part 2 */}
            <section id="part-2" className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold">Part 2 — Frequencies</h2>
                    <p className="text-muted-foreground max-w-3xl">
                        {/* TODO: One-liner, e.g., hybrid images, Gaussian/Laplacian stacks, and multiresolution blending. */}
                        Briefly summarize what you implemented in this part.
                    </p>
                </div>

                {/* 2.1 Image "Sharpening" (15 pts) */}
                <Card>
                    <CardHeader>
                        <CardTitle>2.1 Image "Sharpening"</CardTitle>
                        <CardDescription>
                            {/* TODO: Unsharp masking: I_sharp = I + α (I - Gσ * I). */}
                            Describe the unsharp mask technique and parameters used.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FigureBox label="Input" />
                            <FigureBox label="High-frequency (I - blur)" />
                            <FigureBox label="Sharpened" />
                        </div>
                        <NotesBox>
                            {/* TODO: α values and visual impacts; failure cases. */}
                            Add discussion of α and any artifacts on noisy images.
                        </NotesBox>
                    </CardContent>
                </Card>

                {/* 2.2 Hybrid Images (20 pts) */}
                <Card>
                    <CardHeader>
                        <CardTitle>2.2 Hybrid Images</CardTitle>
                        <CardDescription>
                            {/* TODO: High-pass + low-pass combination; explain viewing distance effect. */}
                            Describe frequency composition and show FFT visualizations optionally.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <FigureBox label="Low-pass source" />
                            <FigureBox label="High-pass source" />
                            <FigureBox label="Hybrid image" />
                            <FigureBox label="FFT(s) (optional)" />
                        </div>
                        <NotesBox>
                            {/* TODO: Cutoff frequencies and kernels. Include both success and failure examples. */}
                            List cutoff σ for low/high passes; include observations and edge cases.
                        </NotesBox>
                    </CardContent>
                </Card>

                {/* 2.3 Gaussian and Laplacian Stacks (10 pts) */}
                <Card>
                    <CardHeader>
                        <CardTitle>2.3 Gaussian and Laplacian Stacks</CardTitle>
                        <CardDescription>
                            {/* TODO: Show level-by-level stacks for an example image. */}
                            Explain how stacks are constructed and used for blending.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FigureBox label="Gaussian levels" />
                            <FigureBox label="Laplacian levels" />
                            <FigureBox label="Masks (if any)" />
                        </div>
                        <NotesBox>
                            {/* TODO: Number of levels, σ per level, normalization decisions. */}
                            Document levels, σ schedule, and visualization details.
                        </NotesBox>
                    </CardContent>
                </Card>

                {/* 2.4 Multiresolution Blending (20 pts) */}
                <Card>
                    <CardHeader>
                        <CardTitle>2.4 Multiresolution Blending</CardTitle>
                        <CardDescription>
                            {/* TODO: Blend two images with a mask; show before/after and seams. */}
                            Describe Laplacian pyramid blending with masks (e.g., apple/orange example).
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <FigureBox label="Image A" />
                            <FigureBox label="Image B" />
                            <FigureBox label="Mask" />
                            <FigureBox label="Blended result" />
                        </div>
                        <NotesBox>
                            {/* TODO: Discuss artifacts, seams, feathering, and parameter choices. */}
                            Add notes on artifacts and how parameters affected results.
                        </NotesBox>
                    </CardContent>
                </Card>

                {/* Optional: Bells & Whistles */}
                <Card>
                    <CardHeader>
                        <CardTitle>Bells & Whistles (Optional)</CardTitle>
                        <CardDescription>
                            {/* TODO: Any extra experiments: color spaces, better masks, interactive sliders, etc. */}
                            Mention extra improvements or experiments you tried.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <NotesBox>
                            {/* TODO: Summarize enhancements and show an example if available. */}
                            Describe any additional features beyond the base requirements.
                        </NotesBox>
                    </CardContent>
                </Card>
            </section>

            <Separator />

            {/* Conclusion */}
            <section className="space-y-3">
                <h2 className="text-2xl font-semibold">Reflection</h2>
                <p className="text-muted-foreground max-w-3xl">
                    {/* TODO: What worked, what didn’t, and what you learned. */}
                    Add a short reflection about the project and key takeaways.
                </p>
            </section>
        </div>
    )
}

// --- Small helpers for consistent figure/notes layout ---
function FigureBox({ label }: { label: string }) {
    return (
        <Card className="overflow-hidden">
            <CardHeader className="py-3">
                <CardTitle className="text-sm font-medium">{label}</CardTitle>
            </CardHeader>
            <CardContent>
                {/* TODO: Replace src with your image path */}
                <AspectRatio ratio={16 / 9} className="bg-muted/40 rounded-lg border border-dashed">
                    {/* <img src="/path/to/image.jpg" alt={label} className="w-full h-full object-contain" /> */}
                </AspectRatio>
            </CardContent>
        </Card>
    )
}

function NotesBox({ children }: { children: React.ReactNode }) {
    return (
        <Card className="bg-muted/20">
            <CardHeader className="py-3">
                <CardTitle className="text-sm">Notes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
                {children}
            </CardContent>
        </Card>
    )
}