import { gql } from '@apollo/client';

export const getProductBySlugDocument = gql(`
  query GetProductBySlug($slug: String!) {
    getProductBySlug(slug: $slug) {
      approved
      attributes
      averageRating
      brand
      category
      color
      currency
      description
      featured
      id
      images {
        public_id
        secure_url
      }
      inStock
      isAddedToFavs
      live
      negotiable
      percentageDiscount
      price
      slug
      title
      totalReviews
      type
      video {
        public_id
        secure_url
      }
    }
  }
`)
