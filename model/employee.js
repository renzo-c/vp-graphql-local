/* @flow */

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} from "graphql";

import Branch from "./branch";
import ServiceShift from "./service-shift";
import Error from './error';

import Db from "../conn/db";
import EmployeeXServiceShift from "./employee-x-service-shift";

const Employee = new GraphQLObjectType({
  name: "Employee",
  description: "This represents a Employee",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(employee) {
          return employee.id;
        }
      },
      firstname: {
        type: GraphQLString,
        resolve(employee) {
          return employee.firstname;
        }
      },
      lastname: {
        type: GraphQLString,
        resolve(employee) {
          return employee.lastname;
        }
      },
      user: {
        type: GraphQLString,
        unique: true,
        resolve(employee) {
          return employee.user;
        }
      },
      password: {
        type: GraphQLString,
        resolve(employee) {
          return employee.password;
        },
      },
      dni: {
        type: GraphQLString,
        unique: true,
        resolve(employee) {
          return employee.dni;
        }
      },
      phone: {
        type: GraphQLString,
        resolve(employee) {
          return employee.phone;
        }
      },
      active: {
        type: GraphQLBoolean,
        resolve(employee) {
          return employee.active;
        }
      },
      ok: {
        type: GraphQLBoolean,
        resolve(logresp) {
          return logresp.ok;
        }
      },
      errors: {
        type: new GraphQLList(Error),
        resolve(logresp) {
          return logresp.errors
        }
      },
      shifts: {
        type: new GraphQLList(ServiceShift),
        resolve(employee) {
          return employee.getServiceshifts();
        }
      },
      empxssh: {
        type: new GraphQLList(EmployeeXServiceShift),
        resolve(employee) {
          return [employee.employeexserviceshift];
        }
      }
    };
  }
});

export default Employee;
