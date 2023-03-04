import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const Author = sequelize.define("Authors", {
    name: {
        type: DataTypes.STRING,
    },
});

export default Author;
