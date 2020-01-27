import CourseRepository from "../../repositories/course/course.repository";
import {getCustomRepository} from "typeorm";
import {injectRepository} from "../../decorators/injectRepository";
import UserRepository from "../../repositories/user/user.repository";


export default class UserService {
    @injectRepository(UserRepository)
    private userRepository: UserRepository;
    constructor() {}

    async getUsers() {
        const repository = getCustomRepository(UserRepository);
        console.log(await repository.getAll());
    }
}
