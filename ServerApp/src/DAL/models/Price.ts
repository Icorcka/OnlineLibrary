import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const Price = sequelize.define("Prices", {
    monthPrice: {
        type: DataTypes.STRING,
    },
    yearPrice: {
        type: DataTypes.STRING,
    },
    infinitePrice: {
        type: DataTypes.STRING,
    },
});

export default Price;
