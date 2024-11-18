import { Request, Response } from "express";
import CreateUserService from "../../services/CreateUserService";
import ListUserService from "../../services/ListUserService";

export default class UserController {
    public async create(request: Request, response: Response): Promise<void> {
        const { name, email, password } = request.body;
        const createUserService = new CreateUserService();
        await createUserService.execute({password, email, name});
        response.json("numbers+1");
    }

    public async index(request: Request, response: Response): Promise<void> {
        const listUserService = new ListUserService();
        const user = await listUserService.execute();
        response.json(user);
    }

}