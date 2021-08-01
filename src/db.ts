const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bilal:asdf@cluster0.kk8cm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch(error) {
    console.log('Mongoose connection error', error)
  }
})

const db = mongoose.connection;

export default db;