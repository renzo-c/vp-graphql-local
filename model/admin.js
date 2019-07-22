/* @flow */

import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

const Admin = new GraphQLObjectType({
  name: "Admin",
  description: "This represents an Administrator",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(admin) {
          return admin.id;
        }
      },
      username: {
        type: GraphQLString,
        resolve(admin) {
          return admin.username;
        }
      },
      email: {
        type: GraphQLString,
        unique: true,
        resolve(admin) {
          return admin.email;
        }
      },
      password: {
        type: GraphQLString,
        resolve(admin) {
          return admin.password;
        }
      }
    };
  }
});

export default Admin;
