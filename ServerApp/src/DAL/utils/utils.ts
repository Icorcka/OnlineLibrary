import { sequelize } from "../connection";
import { ModelTypes } from "../types/ModelTypes";

export const getModel = (type: ModelTypes) => {
    return sequelize.model(type);
}
/**const model = sequelize.modelManager.getModel('Books');
    console.log(sequelize.modelManager.models)
    console.log(model.associations)
    console.log(model.associations["File"]) 

    * Get genre list - get a List of Books by genre
    * Get book info - get a Book
    * Get author books - get a List of Books by author
    * Get books from category - get a List of Books by category

    * Get book price - get  Price of book
    * Rent a book - add a Book to User

    * Log in - check if the creds are right

    * Get book to wish list - create wish list entity
    * unwish - delete entity
    * Get book into toread
    * Get book by name

    * Register

    * Get books by subscription

    * Rearrange toread
    * Create to read
    * Rename to read

    https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/

    const model = sequelize.model("Books");
    const model1 = sequelize.model("Price");
    model.findOne({include: model1});
    Book.findAll({include: 'Price'})
*/
