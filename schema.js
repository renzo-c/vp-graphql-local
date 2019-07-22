// @flow

import { GraphQLSchema } from "graphql";

import QueryType from "./type/query";
import MutationType from "./type/mutation";

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});

export default schema;
