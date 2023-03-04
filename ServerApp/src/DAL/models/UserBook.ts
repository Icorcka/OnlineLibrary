import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Book from "./Book";
import User from "./User";

const UserBook = sequelize.define("UserBook", {
    expireDate: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

UserBook.belongsTo(Book);
UserBook.belongsTo(User);

export default UserBook;
