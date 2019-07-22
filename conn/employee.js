/* @flow */

import Sequelize from "sequelize";

const EmployeeModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  user: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  dni: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.BOOLEAN
  }
};

export default EmployeeModel;
