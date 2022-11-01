import { MigrationInterface, QueryRunner } from 'typeorm';

export class CourseRefactoring1667328468884 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE courses RENAME COLUMN name TO course');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE courses RENAME COLUMN course TO name');
  }
}

/*
npm run build
npx typeorm migration:run -d ./dist/data-source.js
npx typeorm migration:revert -d ./dist/data-source.js
*/
