<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# :cat: NODEJS - with NEST  :cat:

------------------------------------------------

- [x] :coffee: `npm install -g @nestjs/cli`

This command installs nest js to use in the API.;

- [x] :coffee: `nest - v`

## :cat: Crate new project :cat:

- [x] :coffee: `nest new <project name>`

This command Create a new nest project for use in the API;

<div align="center"><br>
    <img align="center" src='./img/nestcreate.png'>
    <img src = './img/installingNest.png'>
</div>

-------------------------------------------------------

## :cat: CONTROLLER with NEST :cat:

-------------------------------------------------------

For declare controller using nest:

:coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart::coffee: :heart: :coffee: :heart:
```javascript

import { Controller, Get } from '@nestjs/common';

@Controller('produtos')
class produtosController {
    @Get()
    static obterTodos(): string {
        return 'listar todos os Produtos';
    }
}

export default produtosController;

```
With this code I created a control using nest and the decorators with @ symbols

-----------------------------------------------------

## :cat: DECORADORES DO NEST :cat:

-----------------------------------------------------

Alguns decoradores: 
```
@Controller("url definitions") \\ recebe o valor de uma URL 
@Get( ':id' )                  \\ Pode receber o valor de um ID ver decor @Param
@Post( )                       \\ method Post
@Put( ':id ' )                 \\ POde recebe um ID
@Delete( ':id' )               \\ method delete pode receber ID

@Param() value                 \\ parametro na url value = nome da var params
@Body() value                  \\ váriavel que veem no corpo da req.
```
Após ser criado os methods para a API precisamos importar o Produtos Controller
para o arquivo gerado no nest:cat: chamado de app.module.ts no campo. @modules -> Controller.

OBS: todos os valores precisam ser importados dentro do import como 

```javascript

import { Body, Param, Post, Put, Get, Delete, Controller } from '@nestjs/common'

```

------------------------------------------------------------

### :cat: Código com todos os methods :cat: ;

------------------------------------------------------------

:coffee:
```javascript
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

```
Podemos também informar o status HTTP de uma operação usando o decorador.
@HttpCode(200)

```javascript

@Get()
@HttpCode(200)
BuscarTodas(): Pessoas[]{
  return Pessoas;
}

```


---------------------------------------------------------

## :cat: USANDO INJECT PARA TRABALHAR COM class :cat:
 
--------------------------------------------------------

O nest:cat: possui vantagens quando queremos usar outras class
no exemplo do exercicio feito usamos o decorador @Injectable() 
e desta maneira conseguimos envocar a class dentro do projeto
sem precisar instanciar a mesma com new.

Preciso lembrar que quando uma class decorada com Injectable 
é importante adicionar em app.module o chamado para class.
Isso é realizado em.

```javascript
  @Module({
      imports: [],
      controllers: [AppController, ProdutosController],
      providers: [AppService, ProdutosServices],
    })
    export class AppModule {}
```

Conforme o exemplo acima adicionamos a class em Provideres.

na class que usaremos com serviço faremos::

```javascript
@Injectable()
export class ProdutosServices{
    produto: Produtos[] = [
        new Produtos('livro01', 'Aulas de TDD com javascript', 29.90),
        new Produtos('livro02', 'Orientação a OBJS Javascript', 59.90),
        new Produtos('livro03', 'Map ForEach Reduce and Filter javascript', 29.90),
    ]
//demais funções do method.(como buscar buscarUm criar deletar atualizar...)
}
```

quando chamado no projeto, dentro da class do controller decorado
pelo method do nest usamos então somente um constructor para class
lembrando de importar a mesma no projeto.

```javascript
@Controller('produtos')
export class ProdutosController{

    constructor( private ProdutosServices: ProdutosServices){

    }

    @Get()
    @HttpCode(200)
    obterTodos(): Produtos[]{
        return this.ProdutosServices.bucarProdutos();
    }
    @Get(':id')
    @HttpCode(200)
    obterUm(@Param() params): Produtos{
        return this.ProdutosServices.buscarUm(params.id);
    }
    @Post()
    @HttpCode(201)
    Criar(@Body() valor): Produtos[]{
        return this.ProdutosServices.criar(valor);
    }
    @Put(':id')
    @HttpCode(200)
    Alterar(@Body() body, @Param() params): Produtos[]{
        return this.ProdutosServices.atualizar(params.id, body);
    }
    @Delete(':id')
    @HttpCode(200)
    apagar(@Param() params):Produtos[]{
        return this.ProdutosServices.deletar(params.id);
    }
}   
```

Conforme o código acima usamos os methods buscarProduto, buscarUm
criar, deletar e atualizar da class do services para dentro do 
controle sem precisar instanciar, somente chamando ela dentro do 
constructor da class ````controller```

----------------------------------------------------------------

### :cat: INTEGRACAO COM O SQL :cat:

----------------------------------------------------------------

Para entregar o projeto ao sql precisamos de algumas dependencias no projeto
sendo elas..

- [x] :coffee: `npm install --save-dev @nestjs/sequelize`
- [x] :coffee: `npm install --save-dev sequelize`
- [x] :coffee: `npm install --save-dev sequelize-typescript`
- [x] :coffee: `npm install --save-dev mysql2`
- [x] :coffee: `npm install --save-dev @types/sequelize`