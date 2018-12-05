import { GraphQLServer } from "graphql-yoga";

// Type of Definition
const typeDefs = `
	type Query {
		me: User!
		post: Post!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		age: Int
	}

	type Post {
		id: ID!
		title: String!
		body: String!
		published: Boolean!
	}
`




// Resolvers
const resolvers = {
	Query: {
		me() {
			return {
				id: 123098,
				name: 'Mike Jones',
				email: 'mikejones@gmail.com',
				age: 23
			}
		},
		post() {
			return {
				id: 145667,
				title: 'The Developer Life',
				body: 'There are many things that I can tell you about what it is like going from McDonald\'s overnight employee, but I can show you much more effectivley.',
				published: true
			}
		}
	}
}

const server = new GraphQLServer({
	typeDefs,
	resolvers
})

server.start(() => {
	console.log('The server is up!');
})
