import Sequelize from "sequelize";

const ServiceShiftModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    primaryKey: true
  },
  begindate: {
    type: Sequelize.DATE
  },
  workspan: {
    type: Sequelize.DATE
  },
  active: {
    type: Sequelize.BOOLEAN
  }
};

export default ServiceShiftModel;
