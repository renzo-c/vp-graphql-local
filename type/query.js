// @flow

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull
} from "graphql";
import * as bcrypt from "bcrypt";

import Employee from "../model/employee";
import Branch from "../model/branch";
import ServiceShift from "../model/service-shift";
import Employeesxserviceshifts from "../model/employee-x-service-shift";
import Parking from "../model/parking";
import Admin from "../model/admin";

import Db from "../conn/db";

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  fields: () => {
    return {
      serviceShifts: {
        type: new GraphQLList(ServiceShift),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args) {
          return Db.models.serviceshift.findAll({
            include: [
              {
                model: Db.models.employee,
                through: {
                  attributes: [
                    "firstname",
                    "lastname",
                    "user",
                    "dni",
                    "phone",
                    "active"
                  ]
                }
              }
            ],
            where: args
          });
        }
      },
      branches: {
        type: new GraphQLList(Branch),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args) {
          return Db.models.branch.findAll({ where: args });
        }
      },
      employees: {
        type: new GraphQLList(Employee),
        args: {
          user: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          return Db.models.employee.findAll({ where: args });
        }
      },
      admins: {
        type: new GraphQLList(Admin),
        args: {
          username: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          const admins = Db.models.admin
            .findAll({ where: args })
            .then(result => {return result.filter(n => n.username !== "superadmin")});
          return admins
        }
      },
      superadmin: {
        type: new GraphQLList(Admin),
        args: {
          username: {
            type: GraphQLString
          }
        },
        resolve(root, args) {
          const admins = Db.models.admin
            .findAll({ where: args })
            .then(result => {return result.filter(n => n.username === "superadmin")});
          return admins
        }
      },
      employeesxserviceshifts: {
        type: new GraphQLList(Employeesxserviceshifts),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args) {
          return Db.models.employeexserviceshift.findAll({
            where: args
          });
        }
      },
      parkings: {
        type: new GraphQLList(Parking),
        args: {
          id: {
            type: GraphQLID
          },
          token: {
            type: GraphQLString
          },
          returned: {
            type: GraphQLBoolean
          },
          serviceshiftId: {
            type: GraphQLID
          }
        },
        resolve(root, args) {
          return Db.models.parking.findAll({ where: args });
        }
      }
    };
  }
});

export default QueryType;
