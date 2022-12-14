import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'nest_db',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'course_nest',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});

export default AppDataSource;
