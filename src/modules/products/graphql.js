import { gql } from '@apollo/client/core'

export const PRODUCTS_QUERY = gql`
  query GetProducts($category: String, $search: String, $limit: Int, $offset: Int) {
    products(category: $category, search: $search, limit: $limit, offset: $offset) {
      id
      name
      description
      price
      originalPrice
      image
      category
      rating
      reviewCount
      inStock
      tags
      createdAt
    }
  }
`

export const PRODUCT_QUERY = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      description
      price
      originalPrice
      images
      category
      rating
      reviewCount
      inStock
      specifications
      seller {
        id
        name
        rating
      }
    }
  }
`