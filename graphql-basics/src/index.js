import { GraphQLServer } from "graphql-yoga";

// Type of Definition
const typeDefs = `
	type Query {
		add(numbers: [Float!]!): Float!
		greeting(name: String): String!
		grades: [Int!]!
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




// Resolvers
const resolvers = {
	Query: {
		add(parent, args, ctx, info) {
			if(args.numbers.length === 0) {
				return 0
			}

			return args.numbers.reduce((accumulator, currentValue) => {
				return accumulator + currentValue
			})
		},
		grades(parents, args, ctx, info) {
			return [99, 80, 93, 40]
		},
		greeting(parent, args, ctx, info) {
			if (args.name) {
				return `Hello, ${args.name}!`
			} else{
				return 'Hello, User!'
			}
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

