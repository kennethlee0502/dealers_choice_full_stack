const Sequelize = require("sequelize");
const { STRING } = Sequelize.DataTypes;
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_react_redux"
);

const User = sequelize.define("user", {
  name: {
    type: STRING,
  },
});

const data = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.create({ name: "Stanley" });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  User,
  data,
};
