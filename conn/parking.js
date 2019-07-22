import Sequelize from "sequelize";

const ParkingModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  plate: {
    type: Sequelize.STRING
  },
  owner: {
    type: Sequelize.STRING
  },
  values: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  comment: {
    type: Sequelize.STRING
  },
  damage: {
    type: Sequelize.STRING
  },
  sign: {
    type: Sequelize.STRING
  },
  token: {
    type: Sequelize.STRING
  },
  returned: {
    type: Sequelize.BOOLEAN
  }
};

export default ParkingModel;
