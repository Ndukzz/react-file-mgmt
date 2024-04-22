import { database } from "../API/firebase";
/*Creates and returns a new user object with the given email, name, and uid.
 * The user object includes properties for the creation and last login dates,
 * as well as an empty array for storing documents associated with the user.*/

const userModel = (email, name, uid) => {
  const model = {
    createdAt: database.date,
    docs: [],
    email: email,
    image: null,
    lastLogin: database.date,
    name: name,
    uid: uid,
    updatedAt: database.date,
  };
  return model;
};

export default userModel;
