const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://test:test@cluster0.doud7.mongodb.net/data?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    (err) => console.error(err)
  );
};
