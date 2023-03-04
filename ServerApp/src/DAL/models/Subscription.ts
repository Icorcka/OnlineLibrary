import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const Subscription = sequelize.define("Subscriptions", {
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
        validate: {
            min: 0,
        }
    }
});

export default Subscription;
