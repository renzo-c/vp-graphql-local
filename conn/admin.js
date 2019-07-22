/* @flow */

import Sequelize from "sequelize";
import * as bcrypt from "bcrypt";

const AdminModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    // validate: {
    //   isAlphanumeric: {
    //     args: true,
    //     msg: "El nombre de usuario solo puede contener letras y números"
    //   },
    //   len: {
    //     args: [4, 11],
    //     msg: "El nombre de usuario debe tener entre 5 y 10 caracteres (test)"
    //   }
    // }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    // validate: {
    //   isEmail: {
    //     args: true,
    //     msg: "Cuenta de correo inválida"
    //   }
    // }
  },
  password: {
    type: Sequelize.STRING,
    // validate: {
    //   len: {
    //     args: [5, 10],
    //     msg: 'La contraseña debe de tener entre 5 y 10 caracteres"'
    //   }
    // }
  },
};


export default AdminModel;
