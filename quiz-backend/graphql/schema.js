const graphql = require('graphql')

const { QuestionType } = require('./QuestionType')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    question: {
      type: QuestionType,
      args: { id: { type: GraphQLString } },
      resolve(){

      }
    }

  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
