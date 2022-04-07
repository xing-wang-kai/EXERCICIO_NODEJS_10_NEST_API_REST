/* eslint-disable prettier/prettier */
import { Get, Controller, Param, Post, Body, Put, Delete, HttpCode } from '@nestjs/common';
import { LivrosServices } from 'src/services/Livros.service';
import { Livros } from '../models/Livros.models';


@Controller('Livros')
export class LivrosController{

    constructor( private LivrosServices: LivrosServices){
    }

    @Get()
    @HttpCode(200)
    async obterTodos(): Promise<Livros[]>{
        return this.LivrosServices.bucarLivros();
    }
    
    @Get(':id')
    @HttpCode(200)
    async  obterUm(@Param() params): Promise<Livros>{
        return this.LivrosServices.buscarUm(params.id);
    }

    @Post()
    @HttpCode(201)
    async Criar(@Body() valor){
        return this.LivrosServices.criar(valor);
    }

    @Put(':id')
    @HttpCode(200)
    async Alterar(@Body() body, @Param() params){
        return this.LivrosServices.atualizar(params.id, body);
    }

    @Delete(':id')
    @HttpCode(200)
    async apagar(@Param() params){
        return this.LivrosServices.deletar(params.id);
    }
}   