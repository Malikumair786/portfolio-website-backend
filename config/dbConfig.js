import mongoose from "mongoose";

// momngo db connection
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    // Only add Data One time
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));

const connection = mongoose.connection;

export default connection;
