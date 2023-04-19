import express from "express";
import cors from "cors";
import logger from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", routes);

db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB!");
  app.listen(PORT, () => {
    console.log(
      `Express server is running in development on http://localhost:${PORT}`
    );
  });
});
