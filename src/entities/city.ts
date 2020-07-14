import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { Country } from "./country";

@Entity()
export class City {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: String;
   
    @ManyToOne(type => Country, country => country.cities)
    country: Country;       //eqivale a la columna de la tabla countrycode que es la foring key
    
    @Column()
    district: String;
    
    @Column()
    population: number;
}