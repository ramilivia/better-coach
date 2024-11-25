import gql from 'graphql-tag'

export const searchHomeProductsDocument = gql(`
  query SearchHomeProductsQuery($search: String!) {
    searchHomeProducts(search: $search) {
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
