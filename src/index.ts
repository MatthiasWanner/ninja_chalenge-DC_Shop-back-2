import { Application } from 'express';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import typeDefs from './typeDefs';
import { userMutations, userQueries } from './resolvers/users';
import { ApolloServer } from 'apollo-server-express';
import { organizationMutations, organizationQueries } from './resolvers/organizations';
import { handleError } from './Middleware/errors';

dotenv.config();

const main = async () => {
  const app: Application = express();

  app.use(cors({ origin: '*', credentials: true }));

  app.use(express.json());

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: {
      Query: {
        ...userQueries,
        ...organizationQueries,
      },
      Mutation: {
        ...userMutations,
        ...organizationMutations,
      },
    },
  });

  app.use(handleError);

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Server ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`,
    );
  });
};

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});
