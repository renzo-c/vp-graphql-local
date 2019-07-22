/* @flow */

import { GraphQLObjectType, GraphQLBoolean, GraphQLList } from "graphql";
import Admin from './admin';
import Error from './error';

const RegisterResponse = new GraphQLObjectType({
  name: "RegisterResponse",
  description: "This represents an RegisterResponse",
  fields: () => {
    return {
      ok: {
        type: GraphQLBoolean,
        resolve(regresp) {
          return regresp.ok;
        }
      },
      admin: {
        type: Admin,
        resolve(user) {
          return user.admin
        }
      },
      errors: {
        type: new GraphQLList(Error),
        resolve(regresp) {
          return regresp.errors
        }
      }
    };
  }
});

export default RegisterResponse;
