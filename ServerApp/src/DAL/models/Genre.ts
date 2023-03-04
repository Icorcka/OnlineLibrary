import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const Genre = sequelize.define("Genres", {
    name: {
        type: DataTypes.STRING,
    },
});

export default Genre;
