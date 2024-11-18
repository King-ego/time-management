import express from "express";
import cors from "cors";
import routes from "./src/shared/infra/routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3100, () => {
    console.log("Server is running on port 3100");
});
