const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const data = require('./data.json');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Response {
    echo: String
    sampleData: String
  }

  type Query {
    myQuery(msg: String!): Response
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  myQuery: async({msg}) => {
    return {
        echo: msg,
        sampleData: data.sampleData
    };
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
