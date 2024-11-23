import IUser from "@modules/users/entities/User";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import UserRepository from "@modules/users/prisma/repositories/UserRepository";

class ListUserService {
    private userRepository: IUserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }
    public async execute(): Promise<IUser[]> {
        return  this.userRepository.index();
    }
}

export default ListUserService;