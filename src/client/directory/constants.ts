import { SearchResultsSortOrder } from '../../shared/search'

/**
 * The available sorting options for GoDirectory which includes popularity and recency.
 */
export const sortOptions = [
  { key: SearchResultsSortOrder.Relevance, label: 'Most relevant' },
  { key: SearchResultsSortOrder.Popularity, label: 'Most popular' },
  { key: SearchResultsSortOrder.Recency, label: 'Most recent' },
]

export const defaultSortOption = SearchResultsSortOrder.Relevance

export default { sortOptions, defaultSortOption }
