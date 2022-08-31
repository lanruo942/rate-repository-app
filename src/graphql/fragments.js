import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
	fragment RepositoryDetails on Repository {
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
`;
