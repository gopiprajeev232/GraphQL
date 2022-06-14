const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require('./src/resolvers')
const { verifyToken } = require('./src/utils/verifyToken')
const { RESTDataSource } = require('apollo-datasource-rest')

const typeDefs = gql`
    type Todo {
        title: String!
        id: ID!
    }

    type Query {
        todos: [Todo]
    }

    type Mutation {
        createTodo(title: String!): Todo
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({req, ...rest}) => {
        let isAuthenticated = false;
        let user = null;
        let token;

        try {
            const authHeader = req.headers.authorization || "";
        
            if(authHeader) {
                token = authHeader.split(" ")[1];

                const payload = await verifyToken(token);
                isAuthenticated = payload ? true : false;

                console.log("Payload: "+JSON.stringify(payload));
            }
        }

        catch(error) {
            console.log(error);
        }

        console.log("Headers auth: "+req.headers.authorization);

        return { ...rest, req, auth: { isAuthenticated, token}}
    }
})

server.listen().then(({url}) => {
    console.log("Server is ready at "+url);
})