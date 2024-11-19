import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import cors from "cors";
import routes from "./src/shared/infra/routes";
import primaClient from "./src/shared/infra/primaClient";
import {errors} from "celebrate";
import AppError from "./src/shared/error";

const app = express();

primaClient.$connect().then(()=>{
    app.use(express.json());

    app.use(cors());

    app.use(routes);

    app.use(errors());

    app.use((err: Error, __: Request, response: Response, _:NextFunction) => {
        if (err instanceof AppError) {
            response.status(err.statusCode).json({
                status: "error",
                message: err.message
            });
        }

        console.error(err);

        response.status(500).json({
            status: "error",
            message: "Internal server error"
        });
    });


    app.listen(3100, () => {
        console.log("Server is running on port 3100");
    });
}).catch((err)=>{
    console.error("Failed to connect to the database:", err);
    process.exit(1);
});

