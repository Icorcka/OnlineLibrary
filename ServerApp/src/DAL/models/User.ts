import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Role from "./Role";

const User = sequelize.define("Users", {
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
    },
});

User.belongsTo(Role);

export default User;
