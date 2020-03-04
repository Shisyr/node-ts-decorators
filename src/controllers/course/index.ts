import {Express} from 'express'
import BaseController from '../base';
import BaseControllerInterface from "../base/interface.base";
import CourseService from "../../services/course/course.service";
import {injectService} from "../../decorators/injectService";
import {GET} from '../../decorators/get';
import {POST} from '../../decorators/post';

console.log(GET);

export function Controller() {
    return function (constructorClass: Function) {
        console.log(constructorClass);
        return constructorClass;
    }
}

export default class CourseController extends BaseController implements BaseControllerInterface {
    @injectService(CourseService) private courseService: CourseService;
    constructor(app: Express) {
        super(app);
    }

    @GET('/api/v1/courses')
    async getCourses(req, res) {
        console.log(this);
        // const courses = await this.courseService.getCourses();
        res.send({list: [], totalCount: 0});
    };

    @POST('/api/v1/courses')
    async createCourse(req, res) {
        console.log(req.body);
        res.status(201).send({message: 'Created!'})
    }

    register() {
    }
}
