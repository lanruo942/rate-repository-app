import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query GetRepositories {
		repositories {
			edges {
				node {
					id
					name
					fullName
					ratingAverage
					reviewCount
					stargazersCount
					forksCount
					ownerAvatarUrl
					description
					language
				}
			}
		}
	}
`;

export const ME = gql`
	query Me {
		me {
			id
			username
		}
	}
`;
