import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1, 
            name: 'Fundamentos', 
            description: 'xxxxx', 
            tags: ['node', 'nest', 'javascript']
        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        console.log(this.courses.find( course => course.id === +id))
        return this.courses.find( course => course.id === +id);
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex( course => course.id === +id);
        this.courses[indexCourse] = updateCourseDto;
    }

    delete(id: string) {
        const indexCourse = this.courses.findIndex( course => course.id === +id);
        if(indexCourse !== -1) {
            this.courses.splice(indexCourse, 1);
        }
    }
}
