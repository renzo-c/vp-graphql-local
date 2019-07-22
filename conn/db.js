import Sequelize from "sequelize";
import * as bcrypt from "bcrypt";
import _ from "lodash";
import Faker from "faker";

import EmployeeModel from "./employee";
import BranchModel from "./branch";
import ServiceShiftModel from "./service-shift";
import EmployeeXServiceShiftModel from "./employee-x-service-shift";
import ParkingModel from "./parking";
import AdminModel from "./admin";
import { dirname } from "path";

require("dotenv").config();

const conn = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
);

const Employee = conn.define("employee", EmployeeModel);
const Branch = conn.define("branch", BranchModel);
const ServiceShift = conn.define("serviceshift", ServiceShiftModel);
const EmployeeXServiceShift = conn.define(
  "employeexserviceshift",
  EmployeeXServiceShiftModel
);
const Parking = conn.define("parking", ParkingModel);

const Admin = conn.define("admin", AdminModel);

export const models = {};
models.sequelize = conn;
models.Sequelize = Sequelize;

// Relationships
Branch.hasMany(ServiceShift);
ServiceShift.belongsTo(Branch);

Employee.belongsToMany(ServiceShift, { through: EmployeeXServiceShift });
ServiceShift.belongsToMany(Employee, { through: EmployeeXServiceShift });
// Employee.hasMany(EmployeeXServiceShift);
// ServiceShift.belongsToMany(EmployeeXServiceShift);

//serviceshift_id -> parking
ServiceShift.hasMany(Parking);
//parking_id -> serciceshift
Parking.belongsTo(ServiceShift);

//employee_id -> parking
Employee.hasMany(Parking);
//parking_id -> employee
Parking.belongsTo(Employee);

conn.sync({ force: false }).then(() => {});

export default conn;
