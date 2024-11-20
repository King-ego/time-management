import { Request, Response } from "express";
import CreateUserService from "../../services/CreateUserService";
import ListUserService from "../../services/ListUserService";
import UpdateUserService from "@modules/users/services/UpdateUserService";

export default class UserController {
    public async create(request: Request, response: Response): Promise<void> {
        const { name, email, password } = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({password, email, name});

        const userWithoutPassword = {
            ...user,
            password: undefined
        };

        response.json(userWithoutPassword);
    }

    public async index(request: Request, response: Response): Promise<void> {
        const listUserService = new ListUserService();
        const user = await listUserService.execute();
        response.json(user);
    }

    public async update(request: Request, response: Response): Promise<void> {
        const { name } = request.body;
        const { user_id } = request.params;

        const updateUserService = new UpdateUserService();

        const update_user = await updateUserService.execute({name, user_id});

        response.json(update_user);
    }

}