
import redkenAcidicColorGloss from '../assets/images/products/redken-acidic-color-gloss.png';
import pureologyHydrateDuo from '../assets/images/products/pureology-hydrate-duo.png';
import pureologyColorFanatic from '../assets/images/products/pureology-color-fanatic.png';

import hotToolsCurlingIron from '../assets/images/products/hot-tools-curling-iron.png';
import dysonSupersonic from '../assets/images/products/dyson-supersonic.png';
import sharkFlexstyle from '../assets/images/products/shark-flexstyle.png';

import k18RepairMask from '../assets/images/products/k18-repair-mask.png';
import wellaMiracleHairRescue from '../assets/images/products/wella-miracle-hair-rescue.png';
import k18HairOil from '../assets/images/products/k18-hair-oil.png';

import bumbleInvisibleOil from '../assets/images/products/bumble-invisible-oil.png';
import colorWowDreamCocktail from '../assets/images/products/color-wow-dream-cocktail.png';
import igkGoodBehavior from '../assets/images/products/igk-good-behavior.png';


// comment for commit 
const amazonUrl = (asin, listId, variant = 'mixed', th = false) => {
    const params = new URLSearchParams({
      linkCode: 'ssc',
      tag: 'onamzale01a40-20',
      creativeASIN: asin,
      'asc_item-id': listId,
      ref_: variant === 'standard'
        ? 'aip_sf_list_spv_ons_d_asin'
        : 'aip_sf_list_spv_ons_mixed_d_asin',
    });
  
    if (th) params.set('th', '1');
  
    return `https://www.amazon.com/dp/${asin}?${params.toString()}`;
  };

export const productCategories = [
  {
    id: 'essentials',
    title: 'The Everyday Essentials',
    description: 'The foundations of a good hair day.',
  },
  {
    id: 'styling',
    title: 'The Styling Edit',
    description: 'The tools behind effortless styling.',
  },
  {
    id: 'treatment',
    title: 'The Hair Treatment',
    description: 'A little extra love for your hair.',
  },
  {
    id: 'finishing',
    title: 'The Finishing Touch',
    description: 'The details that make all the difference.',
  },
];

export const products = [
  // THE EVERYDAY ESSENTIALS
  {
    id: 'redken-acidic-color-gloss',
    name: 'Acidic Color Gloss Duo',
    brand: 'Redken',
    category: 'essentials',
    description: 'Color care for glossy, vibrant-looking hair.',
    image: redkenAcidicColorGloss,
    url: amazonUrl('B0CMY8QL9P', 'amzn1.ideas.122AZ88QZ9LML', 'mixed', true),
  },
  {
    id: 'pureology-hydrate-duo',
    name: 'Hydrate Shampoo & Conditioner',
    brand: 'Pureology',
    category: 'essentials',
    description: 'Moisture and softness for dry, color-treated hair.',
    image: pureologyHydrateDuo,
    url: amazonUrl('B08GLJ4RMC', 'amzn1.ideas.122AZ88QZ9LML', 'standard', true),
  },
  {
    id: 'pureology-color-fanatic',
    name: 'Color Fanatic Leave-In',
    brand: 'Pureology',
    category: 'essentials',
    description: 'An everyday leave-in for detangling and hair care.',
    image: pureologyColorFanatic,
    url: amazonUrl('B0899C98ZD', 'amzn1.ideas.25UR5CERIY2UF', 'mixed', true),
  },

  // THE STYLING EDIT
  {
    id: 'hot-tools-curling-iron',
    name: '1.5" Extended Barrel Curling Iron',
    brand: 'Hot Tools',
    category: 'styling',
    description: 'Create soft, loose curls and effortless waves.',
    image: hotToolsCurlingIron,
    url: amazonUrl('B0CW7GNR56', 'amzn1.ideas.27RIO3MRBZHNI', 'mixed', true),
  },
  {
    id: 'dyson-supersonic',
    name: 'Supersonic Hair Dryer',
    brand: 'Dyson',
    category: 'styling',
    description: 'A premium tool for controlled, everyday drying.',
    image: dysonSupersonic,
    url: amazonUrl('B0B4T6RTZ2', 'amzn1.ideas.27RIO3MRBZHNI', 'mixed'),
  },
  {
    id: 'shark-flexstyle',
    name: 'FlexStyle Air Styling System',
    brand: 'Shark',
    category: 'styling',
    description: 'Versatile drying and styling in one tool.',
    image: sharkFlexstyle,
    url: amazonUrl('B0FDT1WVVK', 'amzn1.ideas.27RIO3MRBZHNI', 'mixed', true),
  },

  // THE HAIR TREATMENT
  {
    id: 'k18-repair-mask',
    name: 'Leave-In Molecular Repair Mask',
    brand: 'K18',
    category: 'treatment',
    description: 'A targeted treatment for damaged hair.',
    image: k18RepairMask,
    url: amazonUrl('B0961ZS96M', 'amzn1.ideas.1R4Y7DBHEPBTA', 'standard', true),
  },
  {
    id: 'wella-miracle-hair-rescue',
    name: 'Ultimate Repair Miracle Hair Rescue',
    brand: 'Wella Professionals',
    category: 'treatment',
    description: 'Extra care for hair that needs a little restoration.',
    image: wellaMiracleHairRescue,
    url: amazonUrl('B0GQ57SJ15', 'amzn1.ideas.1R4Y7DBHEPBTA', 'mixed', true),
  },
  {
    id: 'k18-hair-oil',
    name: 'Molecular Repair Hair Oil',
    brand: 'K18',
    category: 'treatment',
    description: 'A lightweight finishing oil for shine and smoothness.',
    image: k18HairOil,
    url: amazonUrl('B0CD84PNDD', 'amzn1.ideas.25UR5CERIY2UF', 'mixed', true),
  },

  // THE FINISHING TOUCH
  {
    id: 'bumble-invisible-oil',
    name: "Hairdresser's Invisible Oil",
    brand: 'Bumble and bumble',
    category: 'finishing',
    description: 'Lightweight care for softer, smoother-looking hair.',
    image: bumbleInvisibleOil,
    url: amazonUrl('B00K7O332G', 'amzn1.ideas.25UR5CERIY2UF', 'mixed', true),
  },
  {
    id: 'color-wow-dream-cocktail',
    name: 'Dream Cocktail',
    brand: 'Color Wow',
    category: 'finishing',
    description: 'A styling treatment for polished, manageable hair.',
    image: colorWowDreamCocktail,
    url: amazonUrl('B01DMTWSZA', 'amzn1.ideas.25UR5CERIY2UF', 'mixed', true),
  },
  {
    id: 'igk-good-behavior',
    name: 'Good Behavior Smoothing Spray',
    brand: 'IGK',
    category: 'finishing',
    description: 'Smooth, sleek styling with frizz control.',
    image: igkGoodBehavior,
    url: amazonUrl('B0F5YNSGNX', 'amzn1.ideas.25UR5CERIY2UF', 'mixed'),
  },
];

export const getProductsByCategory = (categoryId) =>
  products.filter((product) => product.category === categoryId);
