import { DataTypes } from "sequelize";
import { sequelize } from "../connection";
import Author from "./Author";
import File from "./File";
import Genre from "./Genre";
import Price from "./Price";

const Book = sequelize.define("Books", {
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
});

Book.belongsTo(File, { as: "File", foreignKey: "fileId" });
Book.belongsTo(File, { as: "Image", foreignKey: "imageId" });
Book.belongsTo(Author);
Book.belongsTo(Genre);
Book.belongsTo(Price);

export default Book;
