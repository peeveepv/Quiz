const hapi = require('hapi')
const Path = require('path')
const mongoose = require('mongoose')
const Question = require('./models/Question')
const { graphqlHapi, graphiqlHapi } = require('apollo-server-hapi')
const questionSchema = require('./graphql/schema')

if ( process.env.NODE_ENV !== 'production' ) {
    require('dotenv').config()
  }
  
const uri = process.env.MONGODB_URI

mongoose.connect(uri, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
    console.log('Connected to database')
})


const server = hapi.server({
    port: process.env.HOST || 'localhost',
    port: process.env.PORT || 3001,
    routes: {
        cors: true
    }
})

const init = async () => {

    await server.register(require('inert'));

    // await server.register({
    //     plugin: graphiqlHapi,
    //     options: {
    //         path: '/graphiql',
    //         graphiqlOptions: {
    //             endpointURL: '/graphql'
    //         },
    //         route: {
    //             cors: true
    //         }
            
    //     }
    // })

    // await server.register({
    //     plugin: graphqlHapi,
    //     options: {
    //         path: '/graphql',
    //         graphqlOptions: {
    //             schema: questionSchema,
    //         },
    //         route: {
    //             cors: true,
    //         }
    //     }
    // }) 

    server.route([
        {
        method: 'GET',
        path: '/hello',
        handler: function(request, response){
            return`<p> Hello world! </p>`;
        }
    },
    {
        method: 'GET',
        path: '/{path*}',
        handler: {
          directory: {
            path: Path.join(__dirname, 'build'),
            listing: false,
            index: true
          }
        }
      }, 
    {
        method: 'GET',
        path: '/api/v1/questions',
        handler: (req, res) => {
            return Question.find()
        }
    },
    {
        method: 'POST',
        path: '/api/v1/questions',
        handler: (req, res) => {
            const { text, answers } = req.payload
            const question = new Question({
                text,
                answers
            })

            return question.save()
        }
    }
])
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
}

init()