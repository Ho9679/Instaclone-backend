//gql schema
import { gql } from "apollo-server"

export default gql`
	type User{
		id: String!
		firstName: String!
		lastName: String
		username: String!
		email: String!
		createAt: String!
		updatedAt: String!
	}
`;