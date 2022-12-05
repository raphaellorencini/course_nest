import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTagsTable1670255196903 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tags',
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
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tags');
  }
}

//npx typeorm migration:create src/migrations/CreateTagsTable