# Tiny Graphql Server

This is a tiny implementation of NodeJS server using Express and GraphQL. Mostly a boilerplate for bootstraping a quick and dirty GQL server. 

Tiny Graphql Server is mostly used for fast backend API emulation that returns mocked data.

### Getting started
Run `npm install`, replace src/data.json with your own data and adapt src/index.js to return the data according to your needs.

Go to http://localhost:4000/graphql and execute this query:

```
query myQuery($msg: String!) {
  myQuery(msg:$msg) {
    echo
    sampleData
  }
}
```
```
{
  "msg": "my message"
}
```

If you want to disable Graphiql, just set the variable to false in the index.js.

### Motivation
When fast prototyping, I sometimes have the need to quickly simulate a GraphQL API layer, where I know the data stucture but the real backend is not available yet. This boilerplate is handy in order to protype fast.
