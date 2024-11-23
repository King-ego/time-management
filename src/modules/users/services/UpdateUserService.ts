import User from "@modules/users/entities/User";
import AppError from "@shared/error";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import UserRepository from "@modules/users/prisma/repositories/UserRepository";

interface IRequestUpdateUser {
    name: string;
    user_id: string;
}

class UpdateUserService {
    private userRepository: IUserRepository;

    constructor() {
        this.userRepository = new UserRepository
    }

    public async execute({user_id, name}: IRequestUpdateUser): Promise<User> {
        const existUser = await this.userRepository.findById(user_id);

        if (!existUser) {
            throw new AppError("User not found", 404);
        }

        return this.userRepository.update({user_id, name});

    }
}

export default UpdateUserService;