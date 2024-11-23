import PrimaClient from "../../../shared/infra/prismaClient";
import User from "@modules/users/entities/User";

import UserRepository from "@modules/users/prisma/repositories/UserRepository";
import IUserRepository from "@modules/users/repositories/IUserRepository";

interface IRequestCreateUser {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    private userRepository: IUserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    public async execute({password, email, name}: IRequestCreateUser): Promise<User> {
        return this.userRepository.create(name, email, password);
    }
}

export default CreateUserService;