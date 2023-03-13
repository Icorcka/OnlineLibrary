import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Subscription from "./Subscription";
import User from "./User";

const UserSubscription = sequelize.define("UserSubscription", {
    expireDate: {
        type: DataTypes.DATE
    }
});

UserSubscription.belongsTo(Subscription, {
    foreignKey: 'subscriptionId'
});
UserSubscription.belongsTo(User, {
    foreignKey: 'userId'
});

export default UserSubscription;
