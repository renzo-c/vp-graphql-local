// @flow

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} from "graphql";

import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';

import Employee from "./employee";
import ServiceShift from "./service-shift";

import Db from "../conn/db";

const Parking = new GraphQLObjectType({
  name: "Parking",
  description: "This represents a Parking",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(parking) {
          return parking.id;
        }
      },
      plate: {
        type: GraphQLString,
        resolve(parking) {
          return parking.plate;
        }
      },
      owner: {
        type: GraphQLString,
        resolve(parking) {
          return parking.owner;
        }
      },
      values: {
        type: GraphQLList(GraphQLString),
        resolve(parking) {
          return parking.values;
        }
      },
      comment: {
        type: GraphQLString,
        resolve(parking) {
          return parking.comment;
        }
      },
      damage: {
        type: GraphQLString,
        resolve(parking) {
          return parking.damage;
        }
      },
      sign: {
        type: GraphQLString,
        resolve(parking) {
          return parking.sign;
        }
      },
      token: {
        type: GraphQLString,
        resolve(parking) {
          return parking.token;
        }
      },
      createdAt: {
        type: GraphQLDateTime,
        resolve(parking) {
          return parking.createdAt;
        }
      },
      updatedAt: {
        type: GraphQLDateTime,
        resolve(parking) {
          return parking.updatedAt;
        }
      },
      serviceshift: {
        type: ServiceShift,
        resolve(parking){
          return parking.getServiceshift();
        }
      },
      returned: {
        type: GraphQLBoolean,
        resolve(parking) {
          return parking.returned;
        }
      },
      employee: {
        type: Employee,
        resolve(parking) {
          return parking.getEmployee();
        }
      }
    };
  }
});

export default Parking;
