import fs from 'fs'
import path from 'path'
import { print } from 'graphql'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'

const loadedFiles = loadFilesSync(
  path.join(__dirname, '../components/**/*.graphql'),
)

const typeDefs = mergeTypeDefs(loadedFiles)

const printedTypeDefs = print(typeDefs)

fs.writeFileSync('src/schema.graphql', printedTypeDefs)
