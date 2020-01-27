import {Express} from 'express'
import BaseController from '../base';
import BaseControllerInterface from "../base/interface.base";
import CourseService from "../../services/course/course.service";
import {injectService} from "../../decorators/injectService";

export function Controller() {
    return function (constructorClass: Function) {
        console.log(constructorClass);
    }
}

function GET(path: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('--------------------------------');
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        console.log(target.app);
        console.log(descriptor.value);
        console.log('--------------------------------');
    }
}

@Controller()
export default class CourseController extends BaseController implements BaseControllerInterface {
    @injectService(CourseService) private courseService: CourseService;
    constructor(app: Express) {
        super(app);
    }

    @GET('/api/v1/courses')
    async getCourses(req, res) {
        console.log(req);
        console.log(res);
    }

    register() {
        this.app.get('/api/v1/courses', async (req, res) => {
            const courses = await this.courseService.getCourses();
            res.send({list: courses, totalCount: 0});
        });
    }
}
