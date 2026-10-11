
import {
    products,
    productCategories,
    getProductsByCategory,
  } from './products';
  
  // =========================================
  // HOMEPAGE FEATURED PRODUCTS
  // =========================================
  
  const featuredProductIds = [
    'pureology-color-fanatic',
    'k18-repair-mask',
    'hot-tools-curling-iron',
  ];
  
  // =========================================
  // SHARED HAIR EDIT CONFIGURATION
  // =========================================
  
  export const hairEdit = {
    storefrontUrl:
      'https://www.amazon.com/shop/alexxandriaa?ccs_id=dd62e93f-2ff9-45bf-bacc-3bcc684fcc09',
  
    // Homepage: three featured products
    featuredProducts: featuredProductIds
      .map((id) => products.find((product) => product.id === id))
      .filter(Boolean),
  
    // Hair Edit page: all four collections
    collections: productCategories.map((category, index) => ({
      id: category.id,
      number: String(index + 1).padStart(2, '0'),
      title: category.title,
      description: category.description,
      products: getProductsByCategory(category.id),
    })),
  };
  