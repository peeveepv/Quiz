const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = graphql

const AnswerType = new GraphQLObjectType({
  name: 'Answer',
  fields: () => ({
    id: GraphQLString,
    answer: GraphQLString,
    right: GraphQLBoolean
  })

})

module.exports = AnswerType