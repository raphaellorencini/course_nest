import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import Connection from 'mysql2/typings/mysql/lib/Connection';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoursesService,
        //{ provide: Connection, useValue: {} },
        { provide: getRepositoryToken(Course), useValue: {} },
        { provide: getRepositoryToken(Tag), useValue: {} },
      ],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find one', () => {
    describe('busca curso pelo id', () => {
      it('deve retornar o objeto course', async () => {
        const courseId = '1';
        const expectCourse = {};
        const course = await service.findOne(courseId);
      });
      // it('deve retornar NotFoundException', () => {
      //
      // });
    });
  });
});
