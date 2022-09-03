import { gql } from '@apollo/client';

export const SIGN_IN = gql`
	mutation Authenticate($credentials: AuthenticateInput) {
		authenticate(credentials: $credentials) {
			accessToken
		}
	}
`;

export const SIGN_UP = gql`
	mutation CreateUser($user: CreateUserInput) {
		createUser(user: $user) {
			id
			username
			createdAt
		}
	}
`;

export const CREATE_REVIEW = gql`
	mutation Mutation($review: CreateReviewInput) {
		createReview(review: $review) {
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
`;

export const DELETE_REVIEW = gql`
	mutation DeleteReview($deleteReviewId: ID!) {
		deleteReview(id: $deleteReviewId)
	}
`;
