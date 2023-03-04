import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const File = sequelize.define("Files", {
    name: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
});

export default File;
