import Sequelize from "sequelize";

const BranchModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  branch: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  latitude: {
    type: Sequelize.FLOAT
  },
  longitude: {
    type: Sequelize.FLOAT
  },
  contact: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.BOOLEAN
  }
};

export default BranchModel;
