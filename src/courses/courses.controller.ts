import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    //return response.status(200).send('lista');
    //console.log(this.coursesService.findAll())
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const course = this.coursesService.findOne(id);
    if (!course) {
      throw new HttpException(
        `Course ID ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return course;
  }

  @Post()
  //@HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() createCourseDto: CreateCourseDto) {
    this.coursesService.create(createCourseDto);
    return createCourseDto;
  }

  @Put(':id')
  update(@Body() updateCourseDto: UpdateCourseDto, @Param('id') id: string) {
    this.coursesService.update(id, updateCourseDto);
    return updateCourseDto;
  }

  @Patch(':id')
  patch(@Body() updateCourseDto: UpdateCourseDto, @Param('id') id: string) {
    this.coursesService.update(id, updateCourseDto);
    return updateCourseDto;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.coursesService.delete(id);
  }
}
