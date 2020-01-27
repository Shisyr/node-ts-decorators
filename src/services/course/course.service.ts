import CourseRepository from "../../repositories/course/course.repository";
import {injectRepository} from "../../decorators/injectRepository";


export default class CourseService {
    @injectRepository(CourseRepository)
    private courseRepository: CourseRepository;
    constructor() {}

    async getCourses() {
        return this.courseRepository.getAll()
    }
}
