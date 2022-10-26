import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {

  }

  @Get()
  findAll() {
    //return response.status(200).send('lista');
    //console.log(this.coursesService.findAll())
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const course =  this.coursesService.findOne(id);
    if (!course) {
      throw new HttpException(`Course ID ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return course;
  }

  @Post()
  //@HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    this.coursesService.create(body);
  }

  @Put(':id')
  update(@Body() body, @Param('id') id: string) {
    this.coursesService.update(id, body);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() body) {
    this.coursesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.coursesService.delete(id);
  }
}
