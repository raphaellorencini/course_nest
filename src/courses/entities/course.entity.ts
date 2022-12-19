import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './tag.entity';
import { v4 as uuid } from 'uuid';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable({
    name: 'courses_tags',
    joinColumn: { name: 'course_id' },
    inverseJoinColumn: { name: 'tag_id' },
  })
  @ManyToMany(() => Tag, (tag) => tag.courses, {
    cascade: true,
  })
  tags: Tag[];

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }
    this.id = uuid();
  }
}
