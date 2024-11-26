/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation CreateUser($payload: CreateUserPayload!) {\n    createUser(payload: $payload) {\n      accessToken\n      authToken\n      user {\n        email\n        provider\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation UserLogin($password: String!, $email: String!) {\n    userLogin(password: $password, email: $email) {\n      accessToken\n      authToken\n      user {\n        email\n        provider\n      }\n    }\n  }\n": types.UserLoginDocument,
    "\n  query GetLandingProducts {\n    getLandingProducts {\n      products {\n        color\n        approved\n        attributes\n        averageRating\n        brand\n        category\n        currency\n        description\n        featured\n        id\n        images {\n          public_id\n          secure_url\n        }\n        inStock\n        isAddedToFavs\n        live\n        negotiable\n        percentageDiscount\n        price\n        slug\n        title\n        totalReviews\n        type\n        video {\n          public_id\n          secure_url\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n": types.GetLandingProductsDocument,
    "\n  query GetProductBySlug($slug: String!) {\n    getProductBySlug(slug: $slug) {\n      approved\n      attributes\n      averageRating\n      brand\n      category\n      color\n      currency\n      description\n      featured\n      id\n      images {\n        public_id\n        secure_url\n      }\n      inStock\n      isAddedToFavs\n      live\n      negotiable\n      percentageDiscount\n      price\n      slug\n      title\n      totalReviews\n      type\n      video {\n        public_id\n        secure_url\n      }\n    }\n  }\n": types.GetProductBySlugDocument,
    "\n  query SearchHomeProducts($search: String!) {\n    searchHomeProducts(search: $search) {\n      approved\n      attributes\n      averageRating\n      brand\n      category\n      color\n      currency\n      description\n      featured\n      id\n      images {\n        public_id\n        secure_url\n      }\n      inStock\n      isAddedToFavs\n      live\n      negotiable\n      percentageDiscount\n      price\n      slug\n      title\n      totalReviews\n      type\n      video {\n        public_id\n        secure_url\n      }\n    }\n  }\n": types.SearchHomeProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($payload: CreateUserPayload!) {\n    createUser(payload: $payload) {\n      accessToken\n      authToken\n      user {\n        email\n        provider\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($payload: CreateUserPayload!) {\n    createUser(payload: $payload) {\n      accessToken\n      authToken\n      user {\n        email\n        provider\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserLogin($password: String!, $email: String!) {\n    userLogin(password: $password, email: $email) {\n      accessToken\n      authToken\n      user {\n        email\n        provider\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UserLogin($password: String!, $email: String!) {\n    userLogin(password: $password, email: $email) {\n      accessToken\n      authToken\n      user {\n        email\n        provider\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLandingProducts {\n    getLandingProducts {\n      products {\n        color\n        approved\n        attributes\n        averageRating\n        brand\n        category\n        currency\n        description\n        featured\n        id\n        images {\n          public_id\n          secure_url\n        }\n        inStock\n        isAddedToFavs\n        live\n        negotiable\n        percentageDiscount\n        price\n        slug\n        title\n        totalReviews\n        type\n        video {\n          public_id\n          secure_url\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetLandingProducts {\n    getLandingProducts {\n      products {\n        color\n        approved\n        attributes\n        averageRating\n        brand\n        category\n        currency\n        description\n        featured\n        id\n        images {\n          public_id\n          secure_url\n        }\n        inStock\n        isAddedToFavs\n        live\n        negotiable\n        percentageDiscount\n        price\n        slug\n        title\n        totalReviews\n        type\n        video {\n          public_id\n          secure_url\n        }\n      }\n      pageInfo {\n        totalCount\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProductBySlug($slug: String!) {\n    getProductBySlug(slug: $slug) {\n      approved\n      attributes\n      averageRating\n      brand\n      category\n      color\n      currency\n      description\n      featured\n      id\n      images {\n        public_id\n        secure_url\n      }\n      inStock\n      isAddedToFavs\n      live\n      negotiable\n      percentageDiscount\n      price\n      slug\n      title\n      totalReviews\n      type\n      video {\n        public_id\n        secure_url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProductBySlug($slug: String!) {\n    getProductBySlug(slug: $slug) {\n      approved\n      attributes\n      averageRating\n      brand\n      category\n      color\n      currency\n      description\n      featured\n      id\n      images {\n        public_id\n        secure_url\n      }\n      inStock\n      isAddedToFavs\n      live\n      negotiable\n      percentageDiscount\n      price\n      slug\n      title\n      totalReviews\n      type\n      video {\n        public_id\n        secure_url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchHomeProducts($search: String!) {\n    searchHomeProducts(search: $search) {\n      approved\n      attributes\n      averageRating\n      brand\n      category\n      color\n      currency\n      description\n      featured\n      id\n      images {\n        public_id\n        secure_url\n      }\n      inStock\n      isAddedToFavs\n      live\n      negotiable\n      percentageDiscount\n      price\n      slug\n      title\n      totalReviews\n      type\n      video {\n        public_id\n        secure_url\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchHomeProducts($search: String!) {\n    searchHomeProducts(search: $search) {\n      approved\n      attributes\n      averageRating\n      brand\n      category\n      color\n      currency\n      description\n      featured\n      id\n      images {\n        public_id\n        secure_url\n      }\n      inStock\n      isAddedToFavs\n      live\n      negotiable\n      percentageDiscount\n      price\n      slug\n      title\n      totalReviews\n      type\n      video {\n        public_id\n        secure_url\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;