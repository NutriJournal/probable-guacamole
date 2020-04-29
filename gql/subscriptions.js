import gql from 'graphql-tag';

export const SUBSCRIBE_FORUM_THREADS = gql`
	subscription {
		post {
    mutation
    node {
      id
      user {
        email
      }
    }
  }
	}
`;


/*
Posts:
Id
User
User id (easier than going into the user to find it)
Title
Body
Comments
Likes
Createdat
Updatedat

Comments have:
Id
User
User id
body
Likes
Created at
Updated at
*/