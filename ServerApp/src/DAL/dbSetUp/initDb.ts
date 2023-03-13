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
import Price from "../models/Price";

export const initDb = async () => {
    addManyToMany();
    await Role.sync({ force: true });
    await User.sync({ force: true });
    await File.sync({ force: true });
    await Genre.sync({ force: true });
    await Price.sync({ force: true });
    await Author.sync({ force: true });
    await Book.sync({ force: true });
    await Subscription.sync({ force: true });
    await ToRead.sync({ force: true });
    await UserBook.sync({ force: true });
    await UserSubscription.sync({ force: true });
    
    console.log('db initialized');
};

const addManyToMany = () => {
    Book.belongsToMany(Subscription, { through: 'Subscription_Book' });
    Subscription.belongsToMany(Book, { through: 'Subscription_Book' });
}
