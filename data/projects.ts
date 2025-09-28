import Project0 from "../app/projects/content/proj-0"
import Project1 from "../app/projects/content/proj-1"
import Project2 from "app/projects/content/proj-2"

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
    short: 'Exploring image filtering, frequency domain analysis, and hybrid images using computer vision techniques',
    description: 'Implementing various image filters, analyzing frequency domains, and creating hybrid images that change appearance based on viewing distance',
    content: Project2,
    tags: ['Computer Vision', 'Signal Processing', 'Image Filtering', 'Fourier Transform']
  }
]

export default projects
