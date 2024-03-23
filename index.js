import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// Routes
import AdminRoutes from "./routes/admin.js";
import CourseRoutes from "./routes/courses.js";
import ExperienceRoutes from "./routes/experience.js";
import ProjectRoutes from "./routes/project.js";

// Configurations
// Middlewares
const app = express();
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Now setup some routes
app.use("/", AdminRoutes);
app.use("/courses", CourseRoutes);
app.use("/experience", ExperienceRoutes);
app.use("/project", ProjectRoutes);

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
