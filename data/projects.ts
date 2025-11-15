import Project0 from "../app/projects/content/proj-0"
import Project1 from "../app/projects/content/proj-1"
import Project2 from "app/projects/content/proj-2"
import Project3 from "app/projects/content/proj-3"
import Project4 from "app/projects/content/proj-4"

const projects = [
  {
    slug: 'proj-0',
    title: 'Project 0: Becoming Friends with Your Camera',
    short: 'Exploring portraits at different focal lengths and recreating Dolly Zoom',
    description: 'Exploring portraits at different focal lengths and recreating Dolly Zoom',
    content: Project0,
    tags: ['Photography', 'Camera Techniques', 'Video']
  },
  {
    slug: 'proj-1',
    title: 'Project 1: Images of the Russian Empire -- Colorizing the Prokudin-Gorskii photo collection',
    short: 'Colorizing images from the Prokudin-Gorskii photo collection',
    description: 'Colorizing images from the Prokudin-Gorskii photo collection',
    content: Project1,
    tags: ['Image Processing', 'Computer Vision', 'Historical Data']
  },
  {
    slug: 'proj-2',
    title: 'Project 2: Fun with Filters and Frequencies!',
    short: 'Using kernels and convolutions to create image filters, hybrid images, and multiresolution blends.',
    description: 'Using kernels and convolutions to create image filters, hybrid images, and multiresolution blends.',
    content: Project2,
    tags: ['Computer Vision', 'Signal Processing', 'Image Filtering', 'Fourier Transform']
  },
  {
    slug: 'proj-3',
    title: 'Project 3: [Auto]Stitching Photo Mosaics',
    short: 'Using homography matrices to (auto)stitch photo mosaics',
    description: 'Using homography matrices to (auto)stitch photo mosaics',
    content: Project3,
    tags: ['Computer Vision', 'Homography', 'Image Warping', 'Panorama', 'Mosaics']
  },
  {
    slug: 'proj-4',
    title: 'Project 4: Neural Radiance Field!',
    short: 'Building out a NeRF model',
    description: 'Building out a NeRF model',
    content: Project4,
    tags: ['Computer Vision', 'Deep Learning', 'NeRF', '3D Reconstruction', 'Neural Networks']
  }
]

export default projects
