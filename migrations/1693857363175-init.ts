import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1693857363175 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        CREATE TABLE
          IF NOT EXISTS notes (
            id UUID PRIMARY KEY NOT NULL DEFAULT (uuid_generate_v4()),
            title VARCHAR(255) NOT NULL UNIQUE,
            content TEXT NOT NULL,
            category VARCHAR(100),
            published BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP
            WITH
              TIME ZONE DEFAULT NOW(),
              updated_at TIMESTAMP
            WITH
              TIME ZONE DEFAULT NOW()
          );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE IF EXISTS notes;`,
    );
  }
}
