import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const Role = sequelize.define("Roles", {
    name: {
        type: DataTypes.STRING,
    },
});

export default Role;
