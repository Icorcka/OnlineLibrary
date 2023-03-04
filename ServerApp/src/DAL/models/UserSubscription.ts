import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Book from "./Book";
import User from "./User";

const UserSubscription = sequelize.define("UserSubscription", {
    expireDate: {
        type: DataTypes.DATE
    }
});

UserSubscription.belongsTo(Book);
UserSubscription.belongsTo(User);

export default UserSubscription;
