import { sequelize } from "../connection";
import Book from "./Book";
import User from "./User";

const Wishlist = sequelize.define("Wishlist", {});

Wishlist.belongsTo(Book);
Wishlist.belongsTo(User);

export default Wishlist;
