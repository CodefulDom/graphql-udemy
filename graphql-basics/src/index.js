import { GraphQLServer } from "graphql-yoga";

// Type of Definition
const typeDefs = `
	type Query {
		hello: String!
		name: String!
		location: String!
		bio: String!
	}
`
// Resolvers
const resolvers = {
	Query: {
		hello() {
			return 'This is my first query, bitch!'
		},
		name() {
			return 'Dominique Hallan'
		},
		location() {
			return 'St. Louis, Missouri'
		},
		bio() {
			return 'I am a developer from small town Kansas. MY work ethic is legendary! I am willing to die on treadmill.'
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
