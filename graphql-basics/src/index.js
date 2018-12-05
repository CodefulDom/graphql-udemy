import { GraphQLServer } from "graphql-yoga";

// Type of Definition
const typeDefs = `
	type Query {
		users(query: String): [User!]!
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
		rating: Float
	}
`


const users = [{
	id: '1',
	name: 'Dominique Hallan',
	email: 'dominiquehallan@ghost.com',
	age: 35
}, {
	id: '2',
	name: 'Sarah',
	email: 'sarah@gmail.com',
	age: 39
}, {
	id: '3',
	name: 'Ralph',
	email: 'ralphh@gmail.com',
	age: 39
}]



// Resolvers
const resolvers = {
	Query: {
		users(parent, args, ctx, info) {
			if (!args.query) {
				return users
			}
			return users.filter((user) => {
				return user.name.toLowerCase().includes(args.query.toLowerCase())
			})
		},
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
				published: true,
				rating: 5.0
			}
		}
	}
}

const server = new GraphQLServer({
	typeDefs,
	resolvers
})

server.start(() => {
	console.log('The server is up Dom!');
})

