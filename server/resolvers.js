import { users, quotes } from "./dummyData.js";
import mongoose from "mongoose";
import { JWT_SECRET } from "./config.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const saltRounds = 10;

const User = mongoose.model("User");
const Quote = mongoose.model("Quote");

export const resolvers = {
  Query: {
    users: () => users,
    quotes: () => quotes,
  },
  User: {
    quotes: (user) => quotes.filter((quotes) => quotes.postedBy === user._id),
  },
  Mutation: {
    signupUser: async (_, { newUser }) => {
      const user = await User.findOne({ email: newUser.email });
      if (user) {
        throw new Error("User Already Exist");
      }

      const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);

      const saveUser = new User({
        ...newUser,
        password: hashedPassword,
      });

      return await saveUser.save();
    },
    loginUser: async (_, { userLogin }) => {
      const user = await User.findOne({ email: userLogin.email });

      if (!user) {
        throw new Error("User Doesn't Exist");
      }

      const passwordMatch = await bcrypt.compare(
        userLogin.password,
        user.password
      );

      console.log(passwordMatch);

      //   if (user.password != userLogin.password) {
      if (!passwordMatch) {
        throw new Error("Email or Password is Invalid");
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET);

      return { token };
    },
    createQuote: async (_, { quote }, { userId }) => {
      if (!userId) throw Error("User Must be logged in");
      const newQuote = new Quote({
        quote,
        postedBy: userId,
      });
      await newQuote.save();
      return "Quote Added Successfully";
    },
  },
};
