/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/sequelize';
import { Livros } from "src/models/Livros.models";

@Injectable()
export class LivrosServices{
    constructor(
        @InjectModel(Livros)
        private livroModel: typeof Livros
    ){}
   

    async bucarLivros(): Promise<Livros[]>{
        return this.livroModel.findAll();
    }
    async buscarUm(id: number): Promise<Livros>{
        return this.livroModel.findOne({where:{id: id}});
    }
    async criar(valores): Promise<Livros>{
       return this.livroModel.create(valores);
    }
    async atualizar(id: number, valores: Livros){
        return this.livroModel.update(valores, {where: { id: id}});
    }
    async deletar(id: number): Promise<number>{
        return this.livroModel.destroy({where: {id: id}})
    }
}