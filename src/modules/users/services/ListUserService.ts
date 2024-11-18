import primaClient from "../../../shared/infra/primaClient";
import {Prisma} from "@prisma/client";

class ListUserService {
    public async execute(): Promise<Prisma> {
        const user = await primaClient.user.findMany();
        return user;
    }
}

export default ListUserService;