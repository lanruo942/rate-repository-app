import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
	query GetRepositories {
		repositories {
			edges {
				node {
					...RepositoryDetails
				}
			}
		}
	}
	${REPOSITORY_DETAILS}
`;

export const ME = gql`
	query Me {
		me {
			id
			username
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
	query Repository($repositoryId: ID!) {
		repository(id: $repositoryId) {
			id
			fullName
			reviews {
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
			}
		}
	}
`;
