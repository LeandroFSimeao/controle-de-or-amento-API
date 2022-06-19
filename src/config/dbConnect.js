import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leandro:123@cluster0.1gjzze5.mongodb.net/orcamento");

let db = mongoose.connection;

export default db;