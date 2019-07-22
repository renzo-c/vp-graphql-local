/* @flow */

import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } from "graphql";
import Error from './error';

const LoginResponse = new GraphQLObjectType({
  name: "LoginResponse",
  description: "This represents an LoginResponse",
  fields: () => {
    return {
      ok: {
        type: GraphQLBoolean,
        resolve(logresp) {
          return logresp.ok;
        }
      },
      token: {
        type: GraphQLString,
        resolve(logresp) {
          return logresp.token
        }
      },
      refreshToken: {
        type: GraphQLString,
        resolve(logresp) {
          return logresp.refreshToken
        }
      },
      errors: {
        type: new GraphQLList(Error),
        resolve(logresp) {
          return logresp.errors
        }
      }
    };
  }
});

export default LoginResponse;
