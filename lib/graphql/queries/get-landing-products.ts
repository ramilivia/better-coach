import gql from 'graphql-tag'

export const getLandingProductsDocument = gql(`
  query GetLandingProducts {
    getLandingProducts {
      products {
        color
        approved
        attributes
        averageRating
        brand
        category
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
      pageInfo {
        totalCount
        hasNextPage
        endCursor
      }
    }
  }
`) 