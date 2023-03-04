import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Book from "./Book";
import User from "./User";

const ToRead = sequelize.define("ToRead", {
    listName: {
        type: DataTypes.STRING,
    },
    listNumber: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
        }
    }
});

ToRead.belongsTo(Book);
ToRead.belongsTo(User);

export default ToRead;
