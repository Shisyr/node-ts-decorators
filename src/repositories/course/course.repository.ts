import {getConnection, EntityRepository, getCustomRepository, getRepository, Repository, EntityManager} from "typeorm";
import {CourseEntity} from "../../entity/course.entity";


@EntityRepository(CourseEntity)
export default class CourseRepository extends Repository<CourseEntity> {

    async getById(id: number) {
        return this.createQueryBuilder('course')
            .where('course.id = :id', {id})
            .getOne();
    }

    async getAll() {
        return this.createQueryBuilder('course')
            .getMany();
    }
}
