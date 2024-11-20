import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import UserController from "../controllers/UserController";

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post(
    "/",
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    }),
    userController.create
);

usersRoutes.get(
    "/",
    userController.index
);

usersRoutes.patch(
    "/:user_id",
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required()
        },
        [Segments.PARAMS]: {
            user_id: Joi.string().uuid().required()
        }
    }),
    userController.update
)

export default usersRoutes;