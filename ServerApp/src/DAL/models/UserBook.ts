import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Book from "./Book";
import User from "./User";

const UserBook = sequelize.define("UserBook", {
    expireDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    isInWishList: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    isRented: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
});

UserBook.belongsTo(Book, {
    foreignKey: 'bookId'
});
UserBook.belongsTo(User, {
    foreignKey: 'userId'
});

export default UserBook;
