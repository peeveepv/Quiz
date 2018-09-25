const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql
const { AnswerType } = require('./AnswerType')

const QuestionType = new GraphQLObjectType({
  name: 'Question',
  fields: () => ({
    id: { type: GraphQLString },
    text: { type: GraphQLString },
    answers: { type: new GraphQLList(AnswerType) }
  })
})

module.exports = QuestionType