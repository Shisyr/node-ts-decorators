import {EntityRepository, Repository} from "typeorm";
import {UserEntity} from "../../entity/user.entity";


@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> {

    async getById(id: number) {
        return this.createQueryBuilder('user')
            .where('user.id = :id', {id})
            .getOne();
    }

    async getAll() {
        return this.createQueryBuilder('user')
            .getMany();
    }
}
