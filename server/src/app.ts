/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-03-08 15:00:03
 * @LastEditTime : 2022-03-08 22:10:33
 * @LastEditors  : chilam
 * @FilePath     : \todo-app\server\src\app.ts
 */
import express, { Express } from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(todoRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options: {} = {
  UsenewulParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
