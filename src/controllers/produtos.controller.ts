/* eslint-disable prettier/prettier */
import { Get, Controller, Param, Post, Body, Put, Delete } from '@nestjs/common';


@Controller('produtos')
export class ProdutosController{
    @Get()
    obterTodos(): string{
        return "lista todos os produtos."
    }
    @Get(':id')
    obterUm(@Param() params): string{
        return `Retorna o valor de um produto ${params.id}`
    }
    @Post()
    Criar(@Body() produto): string{
        return `Retornou o produto criado ${produto.valor}`
    }
    @Put(':id')
    Alterar(@Body() body, @Param() params): string{
        return `O ID ${params.id} teve o produto ${body.valor} alterado`
    }
    @Delete(':id')
    apagar(@Param() params):string{
        return `O objeto de ID ${params.id} foi apagado`
    }
}   