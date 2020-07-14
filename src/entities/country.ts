import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { City } from "./city";

@Entity()
export class Country {
    @PrimaryColumn()
    code: String;
    @Column()
    name: String;
    @Column()
    continent: String;
    @Column()
    region: String;
    @Column()
    surfacearea: number;
    @Column()
    indepyear: number;
    @Column()
    population: number;
    @Column()
    lifeexpectancy: number;
    @Column()
    gnp: number;
    @Column()
    gnpold: number;
    @Column()
    governmentform: String;
    @Column()
    headofstate: String;
    @Column()
    capital: number;
    @Column()
    code2: String; 
   
    @OneToMany(type => City, city => city.country, {cascade: true}) //usar en caso que quiera operar en cascada   
    // @OneToMany(type => City, city => city.country )
    cities: City[];
}