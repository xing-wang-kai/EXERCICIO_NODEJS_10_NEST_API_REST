/* eslint-disable prettier/prettier */

import { Column, Model, Table, DataType } from "sequelize-typescript";
@Table
export class Livros extends Model<Livros>{
    @Column({
        type: DataType.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
     id: number;
     @Column({
        type: DataType.STRING(60), 
        allowNull: false,
        
    })
     codigo: string;
     @Column({
        type: DataType.STRING(60), 
        allowNull: false,
        
    })
     nome: string;
     @Column({
        type: DataType.INTEGER, 
        allowNull: false,
        
    })
     preco: number;
}