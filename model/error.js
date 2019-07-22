/* @flow */

import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const Error = new GraphQLObjectType({
  name: "Error",
  description: "This represents an Error",
  fields: () => {
    return {
      path: {
        type: GraphQLString,
        resolve(error) {
          return error.path;
        }
      },
      message: {
        type: GraphQLString,
        resolve(error) {
          return error.message;
        }
      }
    };
  }
});

export default Error;
