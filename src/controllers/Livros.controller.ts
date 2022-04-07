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
    obterTodos(): Livros[]{
        return this.LivrosServices.bucarLivros();
    }
    @Get(':id')
    @HttpCode(200)
    obterUm(@Param() params): Livros{
        return this.LivrosServices.buscarUm(params.id);
    }
    @Post()
    @HttpCode(201)
    Criar(@Body() valor): Livros[]{
        return this.LivrosServices.criar(valor);
    }
    @Put(':id')
    @HttpCode(200)
    Alterar(@Body() body, @Param() params): Livros[]{
        return this.LivrosServices.atualizar(params.id, body);
    }
    @Delete(':id')
    @HttpCode(200)
    apagar(@Param() params):Livros[]{
        return this.LivrosServices.deletar(params.id);
    }
}   