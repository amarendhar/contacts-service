import path from 'path'
import { ApolloServer, gql } from 'apollo-server-express'
import { buildFederatedSchema } from '@apollo/federation'
import { loadTypedefsSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import contactsResolver from '../components/contacts/contactsResolver'

const schemas = loadTypedefsSync(path.join(__dirname, '../schema.graphql'), {
  loaders: [new GraphQLFileLoader()],
})

const [typeDefs] = schemas.map((schema) => schema.document)

const federationSchema = buildFederatedSchema([
  {
    typeDefs: gql`
      ${typeDefs}
    `,
    // @ts-ignore
    resolvers: contactsResolver,
  },
])

/**
 * Note: if you want to enable playground in production and expect to be able to see your
 *  schema, you'll need to manually specify `introspection: true` in the
 *  ApolloServer constructor; by default, the introspection query is only
 *  enabled in dev.
 */
const apolloServerRoute = new ApolloServer({
  schema: federationSchema,
  dataSources: () => ({}),
  playground: true,
  introspection: true,
})

export default apolloServerRoute
