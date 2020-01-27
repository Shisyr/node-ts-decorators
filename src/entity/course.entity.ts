import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('course')
export class CourseEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    name: string;
}
