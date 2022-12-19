import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterCoursesTagsTable1671480283651 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'courses_tags',
      new TableColumn({
        name: 'course_id',
        type: 'varchar',
        length: '36',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'courses_tags',
      new TableColumn({
        name: 'tag_id',
        type: 'varchar',
        length: '36',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKeys('courses_tags', [
      new TableForeignKey({
        name: 'courses_tags_fk1',
        columnNames: ['course_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'courses',
      }),
      new TableForeignKey({
        name: 'courses_tags_fk2',
        columnNames: ['tag_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tags',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('courses_tags', 'courses_tags_fk1');
    await queryRunner.dropForeignKey('courses_tags', 'courses_tags_fk2');
    await queryRunner.dropColumn('courses_tags', 'course_id');
    await queryRunner.dropColumn('courses_tags', 'tag_id');
  }
}
