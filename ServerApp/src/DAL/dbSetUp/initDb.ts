import Author from "../models/Author";
import Book from "../models/Book";
import File from "../models/File";
import Genre from "../models/Genre";
import Role from "../models/Role";
import Subscription from "../models/Subscription";
import ToRead from "../models/ToRead";
import User from "../models/User";
import UserBook from "../models/UserBook";
import UserSubscription from "../models/UserSubscription";
import Wishlist from "../models/Wishlist";

export const initDb = async () => {
    addManyToMany();
    await Role.sync({ force: true, logging: false });
    await User.sync({ force: true, logging: false });
    await File.sync({ force: true, logging: false });
    await Genre.sync({ force: true, logging: false });
    await Author.sync({ force: true, logging: false });
    await Book.sync({ force: true, logging: false });
    await Subscription.sync({ force: true, logging: false });
    await ToRead.sync({ force: true, logging: false });
    await UserBook.sync({ force: true, logging: false });
    await UserSubscription.sync({ force: true, logging: false });
    await Wishlist.sync({ force: true, logging: false });

    console.log('db initialized');
};

const addManyToMany = () => {
    Book.belongsToMany(Subscription, { through: 'Subscription_Book' });
    Subscription.belongsToMany(Book, { through: 'Subscription_Book' });
}
