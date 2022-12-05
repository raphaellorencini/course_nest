import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCoursesTable1670253150543 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courses',
        columns: [
          {
            name: 'id',
            type: 'binary',
            length: '16',
            isPrimary: true,
            default: '(UUID_TO_BIN(UUID()))',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('courses');
  }
}

/*
npx typeorm migration:create src/migrations/CreateCoursesTable

npm run build
npx typeorm migration:run -d ./dist/data-source.js
npx typeorm migration:revert -d ./dist/data-source.js
*/
