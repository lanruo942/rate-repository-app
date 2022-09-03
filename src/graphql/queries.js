import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
	query Repositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
		$first: Int
		$after: String
	) {
		repositories(
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
			first: $first
			after: $after
		) {
			edges {
				node {
					...RepositoryDetails
				}
			}
			totalCount
			pageInfo {
				startCursor
				endCursor
				hasNextPage
			}
		}
	}
	${REPOSITORY_DETAILS}
`;

export const ME = gql`
	query Me($first: Int, $after: String, $includeReviews: Boolean = false) {
		me {
			id
			username
			reviews(first: $first, after: $after) @include(if: $includeReviews) {
				edges {
					node {
						id
						text
						createdAt
						rating
						user {
							id
							username
						}
					}
				}
				pageInfo {
					startCursor
					endCursor
					hasNextPage
				}
			}
		}
	}
`;

export const GET_REPOSITORY = gql`
	query Repository($repositoryId: ID!) {
		repository(id: $repositoryId) {
			...RepositoryDetails
			url
		}
	}
	${REPOSITORY_DETAILS}
`;

export const GET_REVIEWS = gql`
	query Repository($repositoryId: ID!, $first: Int, $after: String) {
		repository(id: $repositoryId) {
			id
			fullName
			reviews(first: $first, after: $after) {
				edges {
					node {
						id
						text
						rating
						createdAt
						user {
							id
							username
						}
					}
				}
				pageInfo {
					startCursor
					endCursor
					hasNextPage
				}
			}
		}
	}
`;
