import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('user')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    email: string;
}
