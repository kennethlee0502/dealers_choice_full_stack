const Sequelize = require("sequelize");
const { STRING } = Sequelize.DataTypes;
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers_choice_full_stack"
);

const Thing = sequelize.define("thing", {
  name: {
    type: STRING,
  },
});

const data = async (res, req, next) => {
  try {
    await sequelize.sync({ force: true });
    await Thing.create({ name: "Hello" });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  Thing,
  data,
};
