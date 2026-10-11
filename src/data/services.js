import blonding from '../assets/images/service-blonding.jpg';
import dimensional from '../assets/images/service-dimensional.jpg';
import extensions from '../assets/images/service-extensions.jpg';
import creative from '../assets/images/service-creative.jpg';

export const serviceCategories = [
  {
    id: 'blonding',
    number: '01',
    title: 'Blonding',
    description:
      'Bright, dimensional blondes that feel soft, lived-in, and uniquely you.',
    previewDescription:
      'Bright, dimensional, effortlessly you.',
    image: blonding,
    imageAlt: 'Dimensional blonde hair with soft waves',
    featured: true,
    startingPrice: null,
    services: [
      {
        name: 'Full Blonding',
        description: 'A complete blonding transformation.',
        price: null,
      },
      {
        name: 'Partial Blonding',
        description: 'Brightness where it matters most.',
        price: null,
      },
      {
        name: 'Blonde Refresh',
        description: 'Refresh your tone and shine.',
        price: null,
      },
    ],
  },
  {
    id: 'dimensional-color',
    number: '02',
    title: 'Dimensional Color',
    description:
      'Rich color, soft movement, and beautiful depth for a natural, elevated look.',
    previewDescription:
      'Rich tones, beautiful depth, natural movement.',
    image: dimensional,
    imageAlt: 'Glossy brunette hair with dimensional highlights',
    featured: true,
    startingPrice: null,
    services: [
      {
        name: 'All-Over Color',
        description: 'Rich, even color from roots to ends.',
        price: null,
      },
      {
        name: 'Dimensional Color',
        description: 'Depth and movement with customized placement.',
        price: null,
      },
      {
        name: 'Color Refresh',
        description: 'Refresh your existing color and shine.',
        price: null,
      },
    ],
  },
  {
    id: 'extensions',
    number: '03',
    title: 'Extensions',
    description:
      'Seamless, natural-looking extensions for added length, volume, or both.',
    previewDescription:
      'The length, volume, and confidence you deserve.',
    image: extensions,
    imageAlt: 'Long, natural-looking hair extensions',
    featured: true,
    startingPrice: null,
    services: [
      {
        name: 'Extension Consultation',
        description: 'A personalized plan for your hair goals.',
        price: null,
      },
      {
        name: 'Extension Installation',
        description: 'Customized length and volume.',
        price: null,
      },
      {
        name: 'Extension Maintenance',
        description: 'Keep your extensions looking their best.',
        price: null,
      },
    ],
  },
  {
    id: 'finishing',
    number: '04',
    title: 'Finishing',
    description:
      'Polished styling for any occasion, from everyday blowouts to special events.',
    previewDescription:
      'Polished styling for every occasion.',
    image: creative,
    imageAlt: 'Styled hair with a polished finish',
    featured: true,
    startingPrice: null,
    services: [
      {
        name: 'Blowout',
        description: 'Smooth, polished styling.',
        price: null,
      },
      {
        name: 'Special Occasion Styling',
        description: 'A finished look for your special event.',
        price: null,
      },
    ],
  },
];

// Homepage featured service cards.
// Toggle featured to control which services appear.
export const signatureServices = serviceCategories
  .filter((category) => category.featured)
  .map((category) => ({
    id: category.id,
    number: category.number,
    title: category.title,
    description: category.previewDescription,
    image: category.image,
    alt: category.imageAlt,
  }));