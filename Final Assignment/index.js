const { ApolloServer } = require('apollo-server')
const fetch = require('node-fetch');

const typeDefs = `
    type Query {
        getAllUsers: [User!]!
        getUserById(id: Int!): User!
        getUserReposById(id: Int!): [Repo!]!
        getUserSubscriptionsById(id: Int!): [Subscription!]!
        getUserFollowers(id: Int!): [User!]!
    }

    type User {
        login: String
        html_url: String
        repos_url: String
        type: String
        name: String
        location: String
        company: String
    }

    type Repo {
        id: String
        name: String
        private: Boolean
        visibility: String   
    }

    type Subscription {
        id: String
        name: String
        description: String
        default_branch: String
    }
`

const resolvers = {
    Query: {
      getAllUsers: async () => {
        const response = await fetch(`https://api.github.com/users`);
        const data = await response.json();

        return data;
      },

     getUserById: async (parent, {id}) => {
        const response = await fetch(`https://api.github.com/users/${id}`);
        const data = await response.json();
    
        return data;
     },

     getUserReposById: async(parent, {id}) => {
        const response = await fetch(`https://api.github.com/users/${id}/repos`);
        const data = await response.json();

        return data;
     },

     getUserSubscriptionsById: async(parent, {id}) => {
        const response = await fetch(`https://api.github.com/users/${id}/subscriptions`);
        const data = await response.json();

        return data;
     },

     getUserFollowers: async (parent, {id}) => {
        const response = await fetch(`https://api.github.com/users/${id}/followers`);
        const data = await response.json();

        return data;
     },

     getUserFollowers: async (parent, {id}) => {
        const response = await fetch(`https://api.github.com/users/${id}/followers`);
        const data = await response.json();

        return data;
     }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log("Server is ready at: "+url)
})
